import React, { useState, useContext, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import QrCodeIcon from '@mui/icons-material/QrCode';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import styled from '@emotion/styled';
import { QR_SCAN_PAGE } from '../../pages/Paths';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';

const ButtonStyled = styled(Button)`
  width: 150px;
  margin: 5px 0;
`;

const ButtonCancel = styled(ButtonStyled)`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export interface QRScannerContentProps {
  inputText: string;
  buttonText: string;
  scanQRCode: (input: string) => void;
  scanQRCancel?: () => void;
  showCancel?: boolean;
}

const QRScannerContent = ({
  inputText,
  buttonText,
  scanQRCode,
  scanQRCancel,
  showCancel,
}: QRScannerContentProps) => {
  const { scannedQRCode } = useContext<any>(VehicleContext);
  const [input, setInput] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    setDisableBtn(!(scannedQRCode.length >= 5));
    setInput(inputText);
  }, [inputText, scannedQRCode]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setInput(value);
    setDisableBtn(!(value.length >= 5));
  };

  return (
    <Box my={5} data-testid="QRScannerContent">
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={0}>
        <Grid item>
          <FormControl variant="standard" sx={{ width: 250 }}>
            <Input
              placeholder={inputText}
              id="qrscanner-input-field"
              value={input}
              onChange={handleChange}
              type="number"
            />
          </FormControl>
          <IconButton
            aria-label="qr-button"
            sx={{ margin: '-5px 0 0px 5px', padding: '5px 5px 0px 5px' }}
          >
            <Link to={QR_SCAN_PAGE}>
              <QrCodeIcon sx={{ color: 'var(--black)', fontSize: 30 }} />
            </Link>
          </IconButton>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <ButtonStyled variant="contained" onClick={() => scanQRCode(input)} disabled={disableBtn}>
            {buttonText}
          </ButtonStyled>
          {showCancel && (
            <ButtonCancel variant="contained" color="secondary" onClick={scanQRCancel}>
              Cancel
            </ButtonCancel>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default QRScannerContent;
