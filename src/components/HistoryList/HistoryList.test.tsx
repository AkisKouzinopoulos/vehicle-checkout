import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import HistoryList from './HistoryList';
import { historyListObj } from './HistoryList.dummy';

describe('testing the HistoryList', () => {
  afterEach(cleanup);

  it('HistoryList is rendered', () => {
    render(<HistoryList vehicleHistory={historyListObj} />);
    const historyListContainer = screen.getAllByTestId('historyListContainer');
    expect(historyListContainer).toBeTruthy();
  });

  it('has the correct amount of CheckListItems', () => {
    render(<HistoryList vehicleHistory={historyListObj} />);
    const historyListItem = screen.getAllByTestId('historyListItem');
    expect(historyListItem.length).toEqual(3);
  });
});
