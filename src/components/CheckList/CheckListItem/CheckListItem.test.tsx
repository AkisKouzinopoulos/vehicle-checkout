import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CheckListItem, { mapTypeString } from './CheckListItem';
import { checkListItemObj } from './CheckListItem.dummy';

describe('testing the CheckListItem', () => {
  afterEach(cleanup);

  it('CheckListItem is rendered', () => {
    render(<CheckListItem check={checkListItemObj} />, { wrapper: Router });
    const complianceCheckLabel = screen.getByTestId('checkListItem');
    expect(complianceCheckLabel).toBeTruthy();
  });
});

describe('mapTypeString returns the right object based on type', () => {
  test.each`
    type  | expected
    ${1}  | ${{ text: 'OK', color: 'success.main', apiText: 'OK' }}
    ${2}  | ${{ text: 'Attention Needed', color: 'error', apiText: 'AttentionNeeded' }}
    ${3}  | ${{ text: 'N/A', color: 'text', apiText: 'NotApplicable' }}
    ${''} | ${{}}
  `('returns $expected when type=$type', ({ type, expected }) => {
    expect(mapTypeString(type)).toEqual(expected);
  });
});
