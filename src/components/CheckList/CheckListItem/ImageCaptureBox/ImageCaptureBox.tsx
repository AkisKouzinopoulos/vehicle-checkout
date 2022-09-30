import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { TAKE_PICTURE_PAGE } from '../../../../pages/Paths';

export interface ImageCaptureBoxProps {
  imageWasCaptured: boolean;
  checkId: number;
  deleteImage?: () => void;
}

const ImageCaptureBox = ({ imageWasCaptured, checkId, deleteImage }: ImageCaptureBoxProps) => {
  const navigate = useNavigate();

  return (
    <Box mt={1} data-testid="imageCaptureBox">
      <Typography variant="body1" color="text.secondary" sx={{ paddingBottom: 1 }}>
        Image Capture (Optional)
      </Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={6} sm={8}>
          <TextField
            data-testid="checklist-image-textfield"
            id="checklist-image-textfield"
            size="small"
            disabled
            fullWidth
            value={imageWasCaptured ? 'Image captured' : 'No image captured.'}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item container direction="row" xs={3} sm={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate(`${TAKE_PICTURE_PAGE}${checkId}`)}
          >
            <CameraAltRoundedIcon />
          </Button>
        </Grid>
        <Grid item container direction="row" xs={3} sm={2}>
          <Button fullWidth variant="contained" color="secondary" onClick={deleteImage}>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageCaptureBox;
