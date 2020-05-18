import { InputText } from 'primereact/components/inputtext/InputText';
import React, { CSSProperties } from 'react';

interface InputFieldProps {
    placeholder?: string
    value?: any
    onChange?: Function,
    name: string,
    floatLabel?: boolean,
    disabled?: boolean,
    style?: CSSProperties,
    class?: string
}

const InputField: React.FC<InputFieldProps> = (props) => {

    const change = (event: React.FormEvent<HTMLInputElement>): void => {
        if (props.onChange)
            props.onChange(event);
    }

    return (
        <span className={props.floatLabel ? 'p-float-label' : ''}>
            <InputText
                id={"input_" + props.name}
                value={props.value}
                onChange={change}
                name={props.name}
                style={props.style}
                placeholder={props.placeholder}
                disabled={props.disabled} />
            {props.floatLabel &&
                <label htmlFor="in">{props.placeholder}</label>
            }
        </span>
    )
}

export default InputField;