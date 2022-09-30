export const vehicleReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_EQUIPMENT':
      return {
        ...state,
        vehicle: action.payload,
        isLoading: false,
        error: false,
        scannedQRCode: '',
        user: {},
        trainerId: '',
      };
    case 'GET_EQUIPMENT_CHECKS':
      return {
        ...state,
        vehicleChecks: action.payload,
        isLoading: false,
        error: false,
      };
    case 'SET_EQUIPMENT_CHECKS':
      return {
        ...state,
        editedVehicleChecks: action.payload,
        isEdited: true,
        tempCapturedImage: '',
      };
    case 'RESET_EQUIPMENT_CHECKS':
      return {
        ...state,
        vehicleChecks: [],
        editedVehicleChecks: [],
        isEdited: false,
      };
    case 'SCAN_QR_CODE':
      return {
        ...state,
        scannedQRCode: action.payload,
      };
    case 'SCAN_IMAGE':
      return {
        ...state,
        tempCapturedImage: action.payload,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
        error: action.payload.error,
        isLoading: false,
      };
    case 'SET_NOTIFICATION':
      // eslint-disable-next-line no-case-declarations
      const { showNotification, message, type, position, hasBeenShown } =
        action.payload.notification;
      return {
        ...state,
        notification: {
          showNotification,
          message,
          type,
          position: 'top' || position,
          hasBeenShown: hasBeenShown || false,
        },
      };
    case 'SET_TRAINER_ID':
      return {
        ...state,
        trainerId: action.payload,
      };
    default:
      return state;
  }
};
