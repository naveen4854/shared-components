import React, { CSSProperties } from 'react';

interface InputFieldProps {
    placeholder?: string
    value?: any
    onChange?: Function,
    name: string,
    floatLabel?: boolean,
    disabled?: boolean,
    style?: CSSProperties,
}

const InputField: React.FC<InputFieldProps> = (props) => {

    const change = (event: React.FormEvent<HTMLInputElement>): void => {
        if (props.onChange)
            props.onChange(event);
    }

    return (
        <input
            id={"input_" + props.name}
            name={props.name}
            style={props.style}
            placeholder={props.placeholder}
            type="text"
            onChange={change}
            disabled={props.disabled}
            className="form-control" value={props.value}
        />
    )
}

export default InputField;