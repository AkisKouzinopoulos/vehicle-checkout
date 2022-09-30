import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import ReportOverviewHeader from './ReportOverviewHeader';

describe('testing the ReportOverviewHeader component', () => {
  afterEach(cleanup);

  it('ReportOverviewHeader component is rendered', () => {
    render(<ReportOverviewHeader number={4} />);
    const pickerHeader = screen.getByTestId('reportHeaderContainer');
    expect(pickerHeader).toBeTruthy();
  });

  it('ReportOverviewHeader alert text is displayed if more than 0 items need attention', () => {
    render(<ReportOverviewHeader number={4} />);
    const attentionNeedTxt = screen.getByText(
      /you have flagged the folowing 4 items as needing attention/i
    );
    expect(attentionNeedTxt).toBeTruthy();
  });

  it('ReportOverviewHeader text is correct if no items need attention', () => {
    render(<ReportOverviewHeader number={0} />);
    const nonNeedAttantionTxt = screen.getByText(
      /you have indicated that no checks need attention/i
    );
    expect(nonNeedAttantionTxt).toBeTruthy();
  });
});
