import React, { FC } from 'react';

import { Sidebar } from 'primereact/components/sidebar/sidebar';

interface CustomSideBarProps {
    visible: boolean
    onHide: any
}

const CustomSideBar: FC<CustomSideBarProps> = ({ visible, onHide, children }) => {

    // const [show, setShow] = useState(visible);

    const onClose = () => {
        // setShow(!show)
        if (onHide)
            onHide();
    }
    return (
        <Sidebar id="navigationSidebar" visible={visible} onHide={onClose}>
            {children}
        </Sidebar>

    )
}

export default CustomSideBar;