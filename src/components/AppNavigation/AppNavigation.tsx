import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { strings as str } from '../../helpers/constants';

export interface AppNavigationProps {
  title: string;
  pathTo?: string;
}

const AppNavigation = ({ title, pathTo }: AppNavigationProps) => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="h5">
              <Link to={-1 as any}>{str.back}</Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {pathTo && (
              <Typography variant="h5" align="right">
                <Link to={pathTo}>{str.next}</Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default AppNavigation;
