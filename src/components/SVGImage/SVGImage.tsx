import React from 'react';
import { SvgIcon } from './SVGImage.styles';

export const mapTypeToIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'available':
      return 'shieldCheck';
    case 'checked out':
      return 'alertCircleCheck';
    case 'out of service':
      return 'alertDecagram';
    case 'retired':
      return 'skullCrossbones';
    case 'certificate expired':
      return 'certificateExpired';
    case 'check':
      return 'checkCircle';
    case 'alert':
      return 'alertFilled';
    default:
      return '';
  }
};

export const iconPath = (type: string) => {
  const imagesFolder = '../../assets/';
  return `url('${imagesFolder}${mapTypeToIcon(type)}.svg')`;
};

export interface SvgIconProps {
  type: string;
  size: number;
}

const SVGImage = ({ size, type }: SvgIconProps) => (
  <SvgIcon size={size} type={type} data-testid="svgImage" />
);

export default SVGImage;
