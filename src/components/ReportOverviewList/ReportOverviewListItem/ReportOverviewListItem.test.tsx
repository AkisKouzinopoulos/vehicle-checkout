import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { reportItemObj } from './ReportOverviewListItem.dummy';
import ReportOverviewListItem from './ReportOverviewListItem';

describe('testing the reportOverviewListItem', () => {
  afterEach(cleanup);

  it('reportOverviewListItem is rendered', () => {
    render(<ReportOverviewListItem reportItem={reportItemObj} />);
    const reportOverviewListItemLabel = screen.getByTestId('reportOverviewListItem');
    expect(reportOverviewListItemLabel).toBeTruthy();
  });
});
