import React, { FC, useState } from 'react';
import { Dialog } from 'primereact/components/dialog/dialog';
import { Button } from '../..';

interface CustomDialogProps {
    header: string
    open: boolean
    style?: Object
    onHide: any
    maximizable: boolean
}

const CustomDialog: FC<CustomDialogProps> = ({ header }) => {
    const [displayBasic, setdisplayBasic] = useState(false);

    const onClose = () => {
        // setVisible(false);
        // if (onHide && open && style)
        //     onHide();
    }
    console.log('adasda')
    debugger
    return (
        <React.Fragment>
            <Button id='' name='' label={header} icon="pi pi-external-link" onClick={() => setdisplayBasic(true)} />

            {displayBasic && <Dialog header="Godfather I" visible={displayBasic}
                style={{ width: '50vw' }}
                onHide={onClose}
            >
                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
            </Dialog>}
        </React.Fragment>
    )
}

export default CustomDialog;