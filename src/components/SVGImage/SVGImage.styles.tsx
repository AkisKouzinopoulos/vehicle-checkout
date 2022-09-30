import styled from '@emotion/styled';
import { SvgIconProps, iconPath } from './SVGImage';

export const SvgIcon = styled('div')<SvgIconProps>`
  background: ${({ type }) => iconPath(type)};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-size: cover;
  background-repeat: no-repeat;
`;
