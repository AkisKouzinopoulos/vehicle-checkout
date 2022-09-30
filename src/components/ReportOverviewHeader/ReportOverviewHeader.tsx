import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import SVGImage from '../SVGImage/SVGImage';

const HeaderContainer = styled(Stack)`
  background: ${({ number }: ReportOverviewHeaderProps) => (number > 0 ? '#f38713' : '#55ab68')};
  padding: 5px 15px;
  margin: 0 -10px;
`;

export interface ReportOverviewHeaderProps {
  number: number;
}

const ReportOverviewHeader = ({ number }: ReportOverviewHeaderProps) => {
  const displayHeadertext = (alertNumber: number) =>
    alertNumber > 0
      ? `You have flagged the folowing ${number} items as needing attention`
      : `You have indicated that no checks need attention`;

  return (
    <HeaderContainer
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      data-testid="reportHeaderContainer"
      textAlign="center"
      number={number}
    >
      <SVGImage size={60} type="Check" />
      <Typography variant="body2" color="white" px={4}>
        {displayHeadertext(number)}
      </Typography>
    </HeaderContainer>
  );
};

export default ReportOverviewHeader;
