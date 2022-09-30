import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const LoadingModal = () => {
  const { isLoading } = useContext<any>(VehicleContext);

  return (
    <Modal
      open={isLoading}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="loadingModal"
    >
      <Box sx={style}>
        <CircularProgress />
      </Box>
    </Modal>
  );
};

export default LoadingModal;
