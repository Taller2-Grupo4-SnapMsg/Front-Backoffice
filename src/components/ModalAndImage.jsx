import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function ModalAndImage({ image_src }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img src={image_src} onClick={handleOpen} style={{ height: '24px', width: '24px' }} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh', // Adjust height as needed
                        width: '80vw', // Adjust width as needed
                    }}
                >
                    <img src={image_src} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalAndImage;
