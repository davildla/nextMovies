import React, { useState } from 'react';
import { Dialog, DialogActions, Container } from '@mui/material';

function ModalComp({
    children, makeTriggerBtn, openController, fullWidth = false, maxWidth = "lg",
    closeCallBack,
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if (openController && openController.setOpen) {
            openController.setOpen(true);
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (openController && openController.setOpen) {
            openController.setOpen(false);
        } else {
            setOpen(false);
        }
        if (closeCallBack) closeCallBack();
    };

    return (
        <>
            {makeTriggerBtn ? makeTriggerBtn({ onClick: handleClickOpen }) : null}
            <Dialog
                open={openController ? openController.open : open}
                style={{ direction: 'rtl' }}
                fullWidth={fullWidth}
                onClose={handleClose}
                maxWidth={maxWidth}
            >
                <DialogActions style={{ direction: 'ltr' }}>
                    <Container>
                        {children}
                    </Container>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ModalComp;
