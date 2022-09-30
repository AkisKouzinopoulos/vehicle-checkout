import { cleanup } from '@testing-library/react';

import { checkCertification, showQrScanner } from './VehicleCheckout';
import {
  userCertifiedDummy,
  userNotCertifiedDummy,
  userCertifiedExpiredDummy,
} from './VehicleCheckout.dummy';

describe('testing the VehicleCheckout page', () => {
  afterEach(cleanup);

  it('checkCertification() returns correct object when user has "Clark" (vehicleTypeId: 11) certification', () => {
    const userCertObj = checkCertification(userCertifiedDummy, 11);
    expect(userCertObj).toEqual(
      expect.objectContaining({ hasCertification: true, expiryDate: '' })
    );
  });

  it('checkCertification() returns correct object when user has no certification for  "Clark" (vehicleTypeId: 11)', () => {
    const userCertObj = checkCertification(userNotCertifiedDummy, 11);
    expect(userCertObj).toEqual(
      expect.objectContaining({ hasCertification: false, expiryDate: '' })
    );
  });

  it('checkCertification() returns correct object when user has "Clark" (vehicleTypeId: 13) certification but has expired', () => {
    const userCertObj = checkCertification(userCertifiedExpiredDummy, 13);
    expect(userCertObj).toEqual(
      expect.objectContaining({ hasCertification: true, expiryDate: '2022-02-08T00:00:00Z' })
    );
  });

  it('checkCertification() returns correct object when user has no "Clark" (vehicleTypeId: 11) certification and has expired', () => {
    const userCertObj = checkCertification(userCertifiedExpiredDummy, 11);
    expect(userCertObj).toEqual(
      expect.objectContaining({ hasCertification: false, expiryDate: '' })
    );
  });

  it('showQrScanner() returns true if statusName is Available or Checked Out or has user expired certification', () => {
    const showQrScannerContent = showQrScanner('available', '2022-02-08T00:00:00Z');
    expect(showQrScannerContent).toEqual(true);
  });

  it('showQrScanner() returns true if statusName is Available or Checked Out or does not have user expired certification', () => {
    const showQrScannerContent = showQrScanner('checked out', null);
    expect(showQrScannerContent).toEqual(true);
  });

  it('showQrScanner() returns false if statusName is Retired or Out of Service', () => {
    const showQrScannerContent = showQrScanner('retired', null);
    expect(showQrScannerContent).toEqual(null);
  });
});
