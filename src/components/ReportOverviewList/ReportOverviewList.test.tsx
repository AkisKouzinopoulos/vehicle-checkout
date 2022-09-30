import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import ReportOverviewList from './ReportOverviewList';
import { reportOverviewList } from './ReportOverviewList.dummy';

describe('testing the ReportOverviewList', () => {
  afterEach(cleanup);

  it('has the correct amount of ReportOvrviewListItems', () => {
    render(<ReportOverviewList reportOverview={reportOverviewList} />);
    const reportOverviewListItem = screen.getAllByTestId('reportOverviewListItem');
    expect(reportOverviewListItem.length).toEqual(4);
  });

  it('Expand is shown if more than three items are in the list', () => {
    render(<ReportOverviewList reportOverview={reportOverviewList} />);
    const expandBtn = screen.getByRole('button', { name: /expand/i });
    expect(expandBtn).toBeTruthy();
  });
});
