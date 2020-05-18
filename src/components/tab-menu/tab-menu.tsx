import React, { useState } from 'react';
import { TabMenu } from 'primereact/components/tabmenu/TabMenu';

export interface TabMenuProps {
    tabs: any[],
    tabChange: Function,
    activeItem: any
}

const TabMenuComponent: React.FC<TabMenuProps> = (props) => {
    const [activeItem, setActiveItem] = useState(props.activeItem)
    const setActive = (e: any) => {
        setActiveItem(e.value);
        props.tabChange(e.value);
    }
    return <div className="content-section implementation">
        <TabMenu model={props.tabs} activeItem={activeItem} onTabChange={setActive} />
    </div>
}

export default TabMenuComponent;