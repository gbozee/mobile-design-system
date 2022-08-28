import { extendTheme } from '@tuteria/chakra-ui-system/dist/src/extend-theme';
import { blur, offset } from './blur';
import borders from './borders';
import { colors } from './colors';
import radii from './radius';
import sizes from './sizes';
import { spacing } from './spacing';
import { typography } from './typography';
// import { fonts } from '../fonts';
import zIndices from './z-index';
import components from '../components';
export const foundations = {
  components,
  colors,
  radii,
  ...typography,
  sizes,
  space: spacing,
  zIndices,
  blur,
  offset,
  borders,
};

export const theme = extendTheme({ ...foundations });

export type Theme = typeof foundations;
