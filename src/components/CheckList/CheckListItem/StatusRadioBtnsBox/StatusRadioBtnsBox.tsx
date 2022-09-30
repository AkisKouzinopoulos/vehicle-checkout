import React, { useState, ChangeEvent, useContext } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import { VehicleContext } from '../../../../context/Vehicle/VehicleContext';
import ImageCaptureBox from '../ImageCaptureBox/ImageCaptureBox';

export interface VehicleProps {
  checkId: number;
}

const StatusRadioBtnsBox = ({ checkId }: VehicleProps) => {
  const { editedVehicleChecks, dispatch } = useContext<any>(VehicleContext);

  const currentItem = editedVehicleChecks.find((check: any) => check.id === checkId);

  const [radioBtnValue, setRadioBtnValue] = useState(currentItem?.vehicleCheckTypeId);
  const [userComment, setUserComment] = useState(currentItem?.userComment);

  const onDeleteImage = () => {
    currentItem.image = '';
    dispatch({ type: 'SET_EQUIPMENT_CHECKS', payload: editedVehicleChecks });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    setRadioBtnValue(+value);
    currentItem.vehicleCheckTypeId = +value;
    dispatch({ type: 'SET_EQUIPMENT_CHECKS', payload: editedVehicleChecks });

    if (value === '1' || value === '3') {
      onDeleteImage();
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    setUserComment(value);
    currentItem.userComment = value;
    dispatch({ type: 'SET_EQUIPMENT_CHECKS', payload: editedVehicleChecks });
  };

  return (
    <Box data-testid="radioBtnsBoxElement" sx={{ padding: { xs: '0', sm: '0 8px' } }}>
      <FormControl fullWidth>
        <FormLabel id="radio-btn-group">Status</FormLabel>
        <RadioGroup
          aria-labelledby="radio-btn-group"
          name="controlled-radio-buttons-group"
          value={radioBtnValue}
          onChange={handleChange}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
            <FormControlLabel value="1" control={<Radio />} label="OK" color="red" />
            <FormControlLabel value="2" control={<Radio />} label="Attention Needed" />
            <FormControlLabel value="3" control={<Radio />} label="N/A" />
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormLabel>Comment (optional)</FormLabel>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        placeholder="You can write your comment here"
        multiline
        rows={3}
        value={userComment}
        onChange={handleCommentChange}
      />
      <Collapse in={radioBtnValue === 2} sx={{ margin: '10px 0' }}>
        <ImageCaptureBox
          imageWasCaptured={!!currentItem?.image}
          checkId={currentItem?.id}
          deleteImage={onDeleteImage}
        />
      </Collapse>
    </Box>
  );
};

export default StatusRadioBtnsBox;
