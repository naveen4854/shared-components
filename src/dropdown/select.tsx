import React from 'react';
import { Dropdown } from 'primereact/components/dropdown/dropdown';

interface SelectProps {
    name: string
    placeholder: string
    optionalLabel?: string
    optionalValue?: string
    value: any
    options: any[]
    onChange: Function
    filter?: boolean
    disabled?: boolean
}

const Select: React.FC<SelectProps> = (props) => {

    const change = (e: { originalEvent: Event, value: any }): void => {
        if (props.onChange)
            props.onChange(e.value);
    }

    const finalOptions = props.options.map((role: any) => ({ label: role[props.optionalLabel || 'label'], value: role[props.optionalValue || 'value'] }))

    return (
        <Dropdown
            className="form-control"
            id={"select_" + props.name + "_dropdown"}
            value={props.value} options={finalOptions}
            disabled={props.disabled}
            onChange={change}
            filter={props.filter}
            placeholder={props.placeholder} />
    )
}

export default Select;