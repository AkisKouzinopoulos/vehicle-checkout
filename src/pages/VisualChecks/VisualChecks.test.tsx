import { cleanup } from '@testing-library/react';

import { changeTypeForChecks } from './VisualChecks';
import { visualChecksArrayDummy, expectedVisualChecksArrayDummy } from './VisualChecks.dummy';

describe('testing the VisualChecks page', () => {
  afterEach(cleanup);

  it('changeTypeForChecks() is changing the type of the right elements ', () => {
    const expectedArray = changeTypeForChecks(visualChecksArrayDummy);
    expect(expectedArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining(expectedVisualChecksArrayDummy[0]),
        expect.objectContaining(expectedVisualChecksArrayDummy[1]),
        expect.objectContaining(expectedVisualChecksArrayDummy[2]),
      ])
    );
  });
});
