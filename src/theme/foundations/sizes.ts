import { spacing } from './spacing';

const largeSizes = {
  'max': 'max-content',
  'min': 'min-content',
  'full': '100%',
  '3xs': 14 * 16,
  '2xs': 16 * 16,
  'xs': 20 * 16,
  'sm': 24 * 16,
  'md': 28 * 16,
  'lg': 32 * 16,
  'xl': 36 * 16,
  '2xl': 42 * 16,
  '3xl': 48 * 16,
  '4xl': 56 * 16,
  '5xl': 64 * 16,
  '6xl': 72 * 16,
  '7xl': 80 * 16,
  '8xl': 90 * 16,
};

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const sizes = {
  ...spacing,
  ...largeSizes,
  container,
};

export default sizes;
