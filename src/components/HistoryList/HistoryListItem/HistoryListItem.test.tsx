import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import HistoryListItem from './HistoryListItem';
import { historyItemObj } from './HistoryListItem.dummy';

describe('testing the HistoryListItem', () => {
  afterEach(cleanup);

  it('HistoryListItem is rendered', () => {
    render(<HistoryListItem history={historyItemObj} />);
    const historyListItemLabel = screen.getByTestId('historyListItem');
    expect(historyListItemLabel).toBeTruthy();
  });

  it('HistoryListItem has the correct content', () => {
    render(<HistoryListItem history={historyItemObj} />);
    const historyListItemSVG = screen.getByTestId('svgImage');
    const historyListItemMiddleTxt = screen.getByText(/out of service/i);
    const historyListItemUserTxt = screen.getByText(/andrew palet/i);
    expect(historyListItemSVG).toBeTruthy();
    expect(historyListItemMiddleTxt).toBeTruthy();
    expect(historyListItemUserTxt).toBeTruthy();
  });
});
