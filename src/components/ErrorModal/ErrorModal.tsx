import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 6,
  borderRadius: '11px',
  p: '25px 15px 10px 15px',
  textAlign: 'center',
  width: { xs: '80%', sm: '70%', md: '60%' },
};

const ErrorModal = () => {
  const { errorMsg, error, dispatch } = useContext<any>(VehicleContext);
  const handleClose = () => dispatch({ type: 'SET_ERROR', payload: { error: false, errorMsg } });

  return (
    <Modal
      open={error}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="errorModal"
    >
      <Stack sx={style}>
        <Typography id="modal-modal-title" variant="h3">
          Error
        </Typography>
        <Typography id="modal-modal-description" variant="body1" sx={{ m: 1, mb: 2 }}>
          {errorMsg}
        </Typography>
        <Button onClick={handleClose}>OK</Button>
      </Stack>
    </Modal>
  );
};

export default ErrorModal;
