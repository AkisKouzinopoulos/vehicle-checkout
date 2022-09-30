import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import VctLogo from '../../assets/vct_logo.svg';

export const WelcomeContainerStyled = styled('div')`
  text-align: center;
`;

export const VctLogoStyled = styled('img')`
  width: 150px;
  margin: 30px auto;
`;

const WelcomeContainer = () => (
  <WelcomeContainerStyled data-testid="welcomeContainer">
    <Typography variant="h1">VCT Checkout</Typography>
    <VctLogoStyled src={VctLogo} alt="Logo" />
    <Typography variant="body1">Start by scanning the vehicle QR Code</Typography>
  </WelcomeContainerStyled>
);

export default WelcomeContainer;
