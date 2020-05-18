import React, { useState, FC } from 'react';

import './index.scss';

interface CardProps {
    headerTitle?: string
    className?: string
}

const Card: FC<CardProps> = (props) => {

    const { children, headerTitle, className } = props;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="card" >
            {
                headerTitle && <div id={"expansion_" + headerTitle} className={className || "card-header dark-blue"} onClick={() => setCollapsed(v => !v)}>
                    <div className="row align-items-center">
                        <div className="col">
                            <h4 className="card-header-title" style={{ float: 'left' }}>
                                {headerTitle}
                            </h4>
                            {/* <i className="pi pi-window-minimize" style={{ float: 'left' }}></i> */}
                            {collapsed ? <i className="pi pi-chevron-down" style={{ float: 'right' }}></i> : <i className="pi pi-chevron-up" style={{ float: 'right' }}></i>}
                        </div>
                    </div>
                </div>
            }
            <div className="card-body" style={{ display: collapsed ? 'none' : 'block' }}>
                {children}
            </div>
        </div>
    )
}

export default Card;