import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import SVGImage, { iconPath, mapTypeToIcon } from './SVGImage';

describe('testing the SVGImage component', () => {
  afterEach(cleanup);

  it('SVGImage component is rendered', () => {
    render(<SVGImage size={50} type="alertCircleCheck" />);
    const svgImage = screen.getByTestId('svgImage');
    expect(svgImage).toBeTruthy();
  });
});

describe('test mapTypeToIcon and iconPath functions', () => {
  const imagesFolder = '../../assets/';

  test.each`
    type                     | expected
    ${'Available'}           | ${'shieldCheck'}
    ${'Checked Out'}         | ${'alertCircleCheck'}
    ${'Out of Service'}      | ${'alertDecagram'}
    ${'Retired'}             | ${'skullCrossbones'}
    ${'Certificate expired'} | ${'certificateExpired'}
    ${'Check'}               | ${'checkCircle'}
    ${'Alert'}               | ${'alertFilled'}
  `('returns $expected when type=$type', ({ type, expected }) => {
    expect(mapTypeToIcon(type)).toEqual(expected);
    expect(iconPath(type)).toEqual(`url('${imagesFolder}${expected}.svg')`);
  });
});
