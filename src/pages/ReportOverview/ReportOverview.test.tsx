import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReportOverview, {
  defineBtnType,
  filterAttentionNeeded,
  overviewIssuesArrayToSend,
} from './ReportOverview';
import {
  editedVehicleChecksDummy,
  expectedVehicleChecksDummy,
  expectedVehicleChecksChangedArray,
} from './ReportOverview.dummy';

describe('testing the ReportOverview page', () => {
  afterEach(cleanup);

  it('The page title is rendered', () => {
    render(<ReportOverview />, { wrapper: Router });
    const ReportOverviewPageTitle = screen.getByRole('heading', { name: /report overview/i });
    expect(ReportOverviewPageTitle).toBeTruthy();
  });

  it('defineBtnType() returns the correct object of bgColor and text values when there are items', () => {
    const expectedObj = defineBtnType(3);
    expect(expectedObj).toEqual(
      expect.objectContaining({
        bgColor: '#f38713',
        bgHoverColor: '#cf700b',
        text: 'Report Issues',
      })
    );
  });

  it('defineBtnType() returns the correct object of bgColor and text values when there are no items', () => {
    const expectedObj = defineBtnType(0);
    expect(expectedObj).toEqual(
      expect.objectContaining({
        bgColor: '#55ab68',
        bgHoverColor: '#3e854d',
        text: 'Confirm Checkout',
      })
    );
  });

  it('filterAttentionNeeded() returns array of "attention needed" items', () => {
    const expectedArray = filterAttentionNeeded(editedVehicleChecksDummy);
    expect(expectedArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining(expectedVehicleChecksDummy[0]),
        expect.objectContaining(expectedVehicleChecksDummy[1]),
      ])
    );
  });

  it('overviewIssuesArrayToSend() returns the right array ', () => {
    const expectedArray = overviewIssuesArrayToSend(editedVehicleChecksDummy);
    expect(expectedArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining(expectedVehicleChecksChangedArray[0]),
        expect.objectContaining(expectedVehicleChecksChangedArray[1]),
        expect.objectContaining(expectedVehicleChecksChangedArray[2]),
      ])
    );
  });

  it('Checkout button is rendering correct when list is empty (no attention needed items)', () => {
    render(<ReportOverview />, { wrapper: Router });
    const checkOutBtn = screen.getByRole('button', { name: /confirm checkout/i });
    expect(checkOutBtn).toBeTruthy();
  });
});
