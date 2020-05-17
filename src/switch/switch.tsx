import React, { FC } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

interface SwitchProps {
    name: string,
    label: string,
    value: boolean,
    onChange(value: boolean): void
}

const Switch: FC<SwitchProps> = ({ label, value, onChange, name }) => {
    const onClick = (e: { originalEvent: Event, value: boolean }) => {
        if (onChange)
            onChange(e.value)
    }
    return (
        <div style={{ display: 'inline-block' }}>
            {/* style={{ display: 'block' }} */}
            <label style={{
                marginRight: '10px',
                marginTop: '0px',
                fontSize: '14px'
            }}>{label}</label>
            <InputSwitch id={"switch_" + name} style={{ float: 'right', top: '4px', fontSize: '8px' }} checked={value} onChange={onClick} />
        </div>
    );
}

export default Switch;