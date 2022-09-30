import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from '@emotion/styled';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import { DISPLAY_PICTURE_PAGE } from '../Paths';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

export const ButtonStyled = styled(Button)`
  position: absolute;
  bottom: 15px;
  right: 10px;
  height: 64px;
  border-radius: 100%;
`;

const TakePicture = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPageId = location.pathname.split('/')[2];

  const webcamRef = useRef<any>(null);
  const { dispatch } = useContext<any>(VehicleContext);
  const [imgSrc, setImgSrc] = useState<any>(null);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
  }, [dispatch]);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
    dispatch({ type: 'SCAN_IMAGE', payload: imageSrc });
    navigate(`${DISPLAY_PICTURE_PAGE}${currentPageId}`);
  }, [dispatch, navigate, currentPageId]);

  const useMediaHandler = () => {
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  return (
    <>
      <AppNavigation title="Take a picture" />

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        onUserMedia={useMediaHandler}
        forceScreenshotSourceSize
      />
      <ButtonStyled variant="contained" aria-label="takepicture" onClick={captureImage}>
        <PhotoCamera />
      </ButtonStyled>
      {imgSrc && <img src={imgSrc} alt="captured" />}
    </>
  );
};

export default TakePicture;
