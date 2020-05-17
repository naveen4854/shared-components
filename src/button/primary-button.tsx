import React from 'react';
import { Button } from 'primereact/button';

interface SelectProps {
    name: string
    label: string
    icon?: string
    iconPos?: string
    className?: string
    onClick: Function
}

const CustomButton: React.FC<SelectProps> = (props) => {

    const click = (e: any): void => {
        if (props.onClick)
            props.onClick(e);
    }

    const finalClass = "".concat(" ", props.className || " ", " ", "primary-button")

    return (
        <Button id={"button_" + props.name} className={finalClass} label={props.label} onClick={click} />
    )
}

export default CustomButton;