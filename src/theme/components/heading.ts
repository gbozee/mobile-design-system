import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import { TextStyle } from 'react-native';
import { getFontSize } from './utils';

const baseStyle: SystemStyleObject = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  flex: 1,
};

const sizes: Record<string, TextStyle> = {
  '4xl': {
    fontSize: getFontSize('6xl'),
    lineHeight: 1,
  },
  '3xl': {
    fontSize: getFontSize('5xl'),
    lineHeight: 1,
  },
  '2xl': {
    fontSize: getFontSize('4xl'),
    lineHeight: 1.2,
  },
  'xl': {
    fontSize: getFontSize('3xl'),
    lineHeight: 1.33,
  },
  'lg': {
    fontSize: getFontSize('2xl'),
    lineHeight: 1.33,
  },
  'md': { fontSize: getFontSize('xl'), lineHeight: 1.2 },
  'sm': { fontSize: getFontSize('md'), lineHeight: 1.2 },
  'xs': { fontSize: getFontSize('sm'), lineHeight: 1.2 },
};
const defaultProps = {
  size: 'xl',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
