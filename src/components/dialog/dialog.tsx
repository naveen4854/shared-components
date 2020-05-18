import React, { FC } from 'react';
import { Dialog } from 'primereact/components/dialog/dialog';

interface CustomDialogProps {
    header: string
    open: boolean
    style: StyleSheet
    onHide: any
    maximizable: boolean
}

const CustomDialog: FC<CustomDialogProps> = ({ header, open, style, onHide, maximizable, children }) => {
    // const [visible, setVisible] = useState(open);

    const onClose = () => {
        // setVisible(false);
        if (onHide)
            onHide();
    }

    return (
        <Dialog header={header} visible={open}
            style={style}
            onHide={onClose} maximizable={maximizable}>
            <>
                {children}
            </>
        </Dialog>
    )
}

export default CustomDialog;