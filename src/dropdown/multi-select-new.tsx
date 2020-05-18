import React from 'react';
import { MultiSelect } from 'primereact/components/multiselect/multiselect';

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
    label?: string
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

    const finalOptions = props.options.map((role: any) => ({ label: role[props.optionalLabel || 'label'], value: role[props.optionalValue || 'value'] }))
    return (
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">{props.label}</label>
            <div className="col-sm-8">
                <MultiSelect id={"multi_select_" + props.name + "_dropdown"} className={props.className || 'form-control'} value={props.value} options={finalOptions}
                    onChange={change}
                    onBlur={blur}
                    filter={props.filter}
                    placeholder={props.placeholder}
                    disabled={props.disabled || false} />
            </div>
        </div>
    )
}

export default MultipleSelect;