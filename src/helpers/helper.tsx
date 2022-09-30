import { msgConstants as msg } from './constants';

const padValue = (value: number) => (value < 10 ? `0${value}` : value);

const msPerDay = 1000 * 60 * 60 * 24;

export const textCertExpiry = 'Your certification to operate this vehicle will expire in ';

export const dateWithTimeFormater = (dateVal: string) => {
  const newDate = new Date(dateVal);
  const sMonth = padValue(newDate.getMonth() + 1) as number;
  const sDay = padValue(newDate.getDate()) as number;
  const sYear = newDate.getFullYear();
  const sMinute = padValue(newDate.getMinutes()) as number;
  let sHour: number = newDate.getHours();
  let sAMPM = 'am';
  const iHourCheck = Math.floor(sHour);

  if (iHourCheck > 12) {
    sAMPM = 'pm';
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = 12;
  }

  return `${sYear}/${sMonth}/${sDay} ${sHour}:${sMinute} ${sAMPM}`;
};

export const dateFormater = (date: string) => date?.slice(0, 10).split('-').join('/');

export const dateHasExpired = (date: string) => new Date() > new Date(dateFormater(date));

export const dayDifference = (date: string) => {
  const dateNow = new Date();
  const dateTest = new Date(dateFormater(date));
  const utc1 = Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
  const utc2 = Date.UTC(dateTest.getFullYear(), dateTest.getMonth(), dateTest.getDate());

  return Math.floor((utc2 - utc1) / msPerDay);
};

export const vehicleMsg = (type: string) => {
  switch (type) {
    case 'Out of Service':
      return msg.unavailableMsg;
    case 'Retired':
      return msg.retiredMsg;
    case 'Certificate Expired':
      return msg.expiredMsg;
    case 'Not Certified':
      return msg.notCertifiedUserMsg;
    case 'AuthorizationFailedAgain':
      return msg.authorizationFailedAgain;
    default:
      return '';
  }
};
