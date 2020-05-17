import React from 'react';
import { Calendar } from 'primereact/calendar';
import './index.scss';

interface CalendarProps {
    placeholder?: string
    value?: any
    onChange?: Function
    name: string
    showIcon?: boolean
    showButtonBar?: boolean
    onClearButtonClick?: any
}

const CustomCalendar: React.FC<CalendarProps> = (props) => {

    const onChange = (e: { originalEvent: Event, value: Date, target: any }): void => {
        if (props.onChange)
            props.onChange(e.originalEvent, e.value);
    }

    return (
        <div className="p-float-label">
            <Calendar
                id={"calender_" + props.name}
                value={props.value}
                onChange={onChange}
                name={props.name}
                showIcon={props.showIcon}
                showButtonBar={props.showButtonBar}
                onClearButtonClick={props.onClearButtonClick}
            />
            <label htmlFor="in">{props.placeholder}</label>
        </div>
    )
}

export default CustomCalendar;