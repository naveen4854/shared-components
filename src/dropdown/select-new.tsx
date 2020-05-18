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
    label?: string
}

const Select: React.FC<SelectProps> = (props) => {

    const change = (e: { originalEvent: Event, value: any }): void => {
        if (props.onChange)
            props.onChange(e.value);
    }

    const finalOptions = props.options.map((role: any) => ({ label: role[props.optionalLabel || 'label'], value: role[props.optionalValue || 'value'] }))

    return (
        //     <div class="form-group col-md-4">
        //     <label for="inputState">State</label>
        //     <select id="inputState" class="form-control">
        //       <option selected>Choose...</option>
        //       <option>...</option>
        //     </select>
        //   </div>
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">{props.label}</label>
            <div className="col-sm-8">
                <Dropdown
                    className="form-control"
                    id={"select_" + props.name + "_dropdown"} value={props.value} options={finalOptions}
                    disabled={props.disabled}
                    onChange={change}
                    filter={props.filter}
                    placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Select;