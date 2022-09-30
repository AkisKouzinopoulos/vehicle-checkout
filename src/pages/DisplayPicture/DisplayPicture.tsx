import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';
import { ButtonStyled } from '../TakePicture/TakePicture';
import { EditedVehicleCheckItem } from '../../clients/models/Vehicle';

const DisplayPicture = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPageId = location.pathname.split('/')[2];
  const { editedVehicleChecks, tempCapturedImage, dispatch } = useContext<any>(VehicleContext);
  const currentItem = editedVehicleChecks?.find(
    (check: EditedVehicleCheckItem) => check.id === +currentPageId
  );

  const uploadImage = () => {
    currentItem.image = tempCapturedImage;
    dispatch({ type: 'SET_EQUIPMENT_CHECKS', payload: editedVehicleChecks });
    navigate(-2);
  };

  return (
    <>
      <AppNavigation title="Display picture" />
      <div className="captured-image">
        <ButtonStyled variant="contained" aria-label="uploadpicture" onClick={uploadImage}>
          <DownloadIcon />
        </ButtonStyled>
        {tempCapturedImage && <img src={tempCapturedImage} alt="captured" />}
      </div>
    </>
  );
};

export default DisplayPicture;
