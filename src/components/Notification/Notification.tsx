import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

export interface NotificationProps {
  showNotification: boolean;
  message?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  position: 'top' | 'bottom';
  hasBeenShown?: boolean;
}

export interface NotificationComponentProps {
  notification: NotificationProps;
}

const Notification = () => {
  const { notification, dispatch } = useContext<any>(VehicleContext);

  const handleClose = () => {
    dispatch({
      type: 'SET_NOTIFICATION',
      payload: {
        ...notification.notification,
        notification: {
          showNotification: false,
          message: notification.message,
          type: notification.type,
          position: notification.position,
          hasBeenShown: notification.hasBeenShown,
        },
      },
    });
  };

  return (
    <Snackbar
      open={notification.showNotification}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top' || notification.position, horizontal: 'center' }}
      sx={{ paddingTop: '50px' }}
    >
      <Alert severity={notification.type} sx={{ width: '100%' }} icon={false}>
        <Typography variant="h4" align="center" sx={{ width: '100%' }}>
          {notification.message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
