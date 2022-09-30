import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import { theme } from './Theme';
import {
  HOME_PAGE,
  VEHICLE_CHECKOUT_PAGE,
  VISUAL_CHECKS_PAGE,
  REPORT_OVERVIEW_PAGE,
  OPERATIONAL_CHECKS_PAGE,
  QR_SCAN_PAGE,
  TAKE_PICTURE_PAGE,
  DISPLAY_PICTURE_PAGE,
} from './pages/Paths';
import Home from './pages/Home/Home';
import VehicleCheckout from './pages/VehicleCheckout/VehicleCheckout';
import VisualChecks from './pages/VisualChecks/VisualChecks';
import ReportOverview from './pages/ReportOverview/ReportOverview';
import OperationalChecks from './pages/OperationalChecks/OperationalChecks';
import QRScan from './pages/QRScan/QRScan';
import TakePicture from './pages/TakePicture/TakePicture';
import DisplayPicture from './pages/DisplayPicture/DisplayPicture';
import { VehicleProvider } from './context/Vehicle/VehicleContext';
import LoadingModal from './components/LoadingModal/LoadingModal';
import ErrorModal from './components/ErrorModal/ErrorModal';
import Notification from './components/Notification/Notification';

// Css
import './App.css';

const MainContainer = styled(Container)`
  background: #fafafa;
`;

function App() {
  return (
    <Router>
      <VehicleProvider>
        <ThemeProvider theme={theme}>
          <MainContainer maxWidth="md">
            <Routes>
              <Route path={HOME_PAGE} element={<Home />} />
              <Route path={`${VEHICLE_CHECKOUT_PAGE}:id`} element={<VehicleCheckout />} />
              <Route path={VISUAL_CHECKS_PAGE} element={<VisualChecks />} />
              <Route path={REPORT_OVERVIEW_PAGE} element={<ReportOverview />} />
              <Route path={OPERATIONAL_CHECKS_PAGE} element={<OperationalChecks />} />
              <Route path={QR_SCAN_PAGE} element={<QRScan />} />
              <Route path={`${TAKE_PICTURE_PAGE}:id`} element={<TakePicture />} />
              <Route path={`${DISPLAY_PICTURE_PAGE}:id`} element={<DisplayPicture />} />
            </Routes>
            <LoadingModal />
            <ErrorModal />
            <Notification />
          </MainContainer>
        </ThemeProvider>
      </VehicleProvider>
    </Router>
  );
}

export default App;
