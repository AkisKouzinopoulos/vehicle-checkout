import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import ReportOverviewList from '../../components/ReportOverviewList/ReportOverviewList';
import ReportOverviewHeader from '../../components/ReportOverviewHeader/ReportOverviewHeader';
import AppNavigation from '../../components/AppNavigation/AppNavigation';
import { VehicleContext } from '../../context/Vehicle/VehicleContext';
import {
  ReportOverviewItem,
  VehicleReportIssue,
  VehicleReport,
  EditedVehicleCheckItem,
} from '../../clients/models/Vehicle';
import VctApiClient from '../../clients/VctApiClient';
import { mapTypeString } from '../../components/CheckList/CheckListItem/CheckListItem';
import { HOME_PAGE } from '../Paths';
import {
  VehicleReportProps,
  ButtonTypeProps,
  CustomButtonProps,
  FilteredCheckProps,
} from './ReportOverview.interface';
import { msgConstants as msg } from '../../helpers/constants';

const CheckOutBtn = styled(Button)<CustomButtonProps>`
  margin: 0 auto;
  background: ${({ btnbg }) => btnbg.bgColor};
  margin: 0 auto;
  border-radius: 20px;
  text-transform: none;
  &:hover {
    background: ${({ btnbg }) => btnbg.bgHoverColor};
  }
`;

export const defineBtnType = (items: number): ButtonTypeProps =>
  items > 0
    ? { bgColor: '#f38713', bgHoverColor: '#cf700b', text: 'Report Issues' }
    : { bgColor: '#55ab68', bgHoverColor: '#3e854d', text: 'Confirm Checkout' };

export const filterAttentionNeeded = (editedVehicleArray: ReportOverviewItem[]) =>
  editedVehicleArray.filter((check: FilteredCheckProps) => check.vehicleCheckTypeId === 2);

export const overviewIssuesArrayToSend = (checksArray: ReportOverviewItem[]) => {
  const clearedArray = [] as VehicleReportIssue[];

  checksArray.forEach(item => {
    clearedArray.push({
      vehicleCheckId: item.id,
      userComment: item.userComment,
      vehicleCheckStatusId: mapTypeString(item.vehicleCheckTypeId).apiText,
    });
  });

  return clearedArray;
};

const ReportOverview = () => {
  const navigate = useNavigate();

  const { vehicle, editedVehicleChecks, user, trainerId, dispatch } =
    useContext<any>(VehicleContext);

  const overview = filterAttentionNeeded(editedVehicleChecks);
  const issuesWithImages = editedVehicleChecks.filter((issue: any) => issue.image);

  const reportObjToSend = {
    reportedByUserId: user.id,
    reportedOn: new Date().toISOString(),
    trainerId,
    vehicleId: vehicle.id,
    issues: overviewIssuesArrayToSend(editedVehicleChecks),
    isManualEntry: false,
  } as VehicleReport;

  const uploadIssueImage = async ({ id }: VehicleReportProps) => {
    issuesWithImages.forEach(async (item: EditedVehicleCheckItem) => {
      await VctApiClient.uploadImage(id, item.id, item.image)
        .then(() => {
          dispatch({ type: 'SET_LOADING', payload: false });
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.genericErrorMsg } });
        });
    });
  };

  const submitReport = () => {
    dispatch({ type: 'SET_LOADING', payload: true });

    const fetchReportData = async () => {
      await VctApiClient.sendReport(reportObjToSend)
        .then(({ data, status }) => {
          if (issuesWithImages.length > 0) {
            if (data.workOrderId) {
              uploadIssueImage(data);
            } else {
              dispatch({
                type: 'SET_ERROR',
                payload: { error: true, errorMsg: msg.servicesErrorMsg },
              });
            }
          }

          if (status === 200) {
            navigate(HOME_PAGE);
            dispatch({ type: 'SET_LOADING', payload: false });
          }
        })
        .catch(() => {
          dispatch({ type: 'SET_ERROR', payload: { error: true, errorMsg: msg.genericErrorMsg } });
        });
    };

    fetchReportData();
  };

  return (
    <>
      <AppNavigation title="Report Overview" />
      <Paper elevation={2} sx={{ padding: '5px 10px' }}>
        <ReportOverviewHeader number={overview.length} />
        <Typography variant="body2" align="center" my={2} px={1}>
          Click the button below to finalize the report or click the back button above to make
          changes
        </Typography>
        <ReportOverviewList reportOverview={overview} />
      </Paper>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end" mt={5} px={6}>
        <CheckOutBtn
          variant="contained"
          btnbg={defineBtnType(overview.length)}
          align="center"
          fullWidth
          onClick={submitReport}
        >
          {defineBtnType(overview.length).text}
        </CheckOutBtn>
      </Box>
    </>
  );
};

export default ReportOverview;
