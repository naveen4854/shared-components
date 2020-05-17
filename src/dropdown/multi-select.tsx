import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

interface SelectProps {
    name: string
    placeholder: string
    optionalLabel?: string
    optionalValue?: string
    value: any
    filter?: boolean
    options: any[]
    className?: string
    onChange: Function
    onBlur?: Function
    disabled?: boolean
}

const MultipleSelect: React.FC<SelectProps> = (props) => {

    const change = (e: { originalEvent: Event, value: any }): void => {
        if (props.onChange)
            props.onChange(e.value);
    }

    const blur = (e: any): void => {
        if (props.onBlur)
            props.onBlur(e);
    }

    let finalOptions = props.options.map((role: any) => ({ label: role[props.optionalLabel || 'label'], value: role[props.optionalValue || 'value'] }))
    finalOptions = finalOptions.sort((a, b) => {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
    });
    return (
        <MultiSelect
            id={"multi_select_" + props.name + "_dropdown"}
            className={props.className || 'form-control'}
            value={props.value} options={finalOptions}
            onChange={change}
            onBlur={blur}
            filter={props.filter}
            placeholder={props.placeholder}
            disabled={props.disabled || false} />
    )
}

export default MultipleSelect;