import { typography } from '../foundations/typography';
import { colors } from '../foundations/colors';
import { memoizedGet as get } from '@chakra-ui/utils';
import { spacing } from '../foundations/spacing';
import sizes from '../foundations/sizes';
import radii from '../foundations/radius';
import borders from '../foundations/borders';

export const getColor = (v: string, scale?: number) => {
  if (v) {
    if (v.split('.').length > 1) {
      return get(colors, v);
    }
    return get(colors, `${v}.${scale}`);
  }
  return get(colors, v);
};
export const getFontSize = (v: string) => {
  return get(typography.fontSizes, v);
};

export const getSize = (v: keyof typeof sizes) => {
  return get(sizes, v);
};
export const getContainerSize = (v: keyof typeof sizes.container) => {
  return get(sizes.container, v);
};
export const getSpacing = (v: keyof typeof spacing) => {
  return get(spacing, v);
};

export const getRadius = (v: keyof typeof radii) => {
  return get(radii, v);
};

export const getBorder = (v: keyof typeof borders) => {
  return get(borders, v);
};
