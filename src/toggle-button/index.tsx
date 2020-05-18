import React, { useState, FC } from 'react';
import { ToggleButton } from 'primereact/components/togglebutton/togglebutton';

interface ToggleProps {
    onLabel: string,
    offLabel: string,
    onIcon?: string,
    offIcon?: string,
    onChange: Function
}

const CustomToggle: FC<ToggleProps> = ({ onLabel, offLabel, onChange }) => {

    const [checked, setChecked] = useState(false);
    return (
        <ToggleButton style={{ width: '150px' }} onLabel={onLabel} offLabel={offLabel}
            checked={checked} onChange={(e) => { setChecked(t => !t); onChange(e) }} />
    )
}

export default CustomToggle;