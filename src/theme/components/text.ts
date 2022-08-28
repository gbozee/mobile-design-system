import { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import { FlexStyle } from 'react-native';
import { colors } from '../foundations/colors';
import { typography } from '../foundations/typography';
import { getColor, getFontSize } from './utils';

const baseStyle: SystemStyleObject & FlexStyle = {
  color: colors.gray['600'],
  fontFamily: typography.fonts.regular,
};
const variantDefault: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: getColor(c),
  };
};
const variantHeader: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: getColor(c),
    fontFamily: typography.fonts.xbold,
  };
};
const variantBold: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: getColor(c),
    fontFamily: typography.fonts.bold,
  };
};
const variantLabel: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: getColor(c),
    fontFamily: typography.fonts.semibold,
  };
};
const variantSubtitle: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: getColor(c),
    fontFamily: typography.fonts.medium,
  };
};
const variants = {
  default: variantDefault,
  bold: variantBold,
  header: variantHeader,
  fieldLabel: variantLabel,
  subtitle: variantSubtitle,
};
const getSizeStyles = (
  variant: string,
  _lineHeight = 1
): SystemStyleFunction => {
  return (_props) => {
    return {
      fontSize: getFontSize(variant),
    };
  };
};
const sizes = {
  '6xl': getSizeStyles('6xl'),
  '5xl': getSizeStyles('5xl'),
  '4xl': getSizeStyles('4xl'),
  '3xl': getSizeStyles('3xl'),
  '2xl': getSizeStyles('2xl'),
  'xl': getSizeStyles('xl'),
  'lg': getSizeStyles('lg'),
  'md': getSizeStyles('md'),
  'sm': getSizeStyles('sm'),
  'xs': getSizeStyles('xs'),
};
const defaultProps = {
  size: 'md',
  variant: 'default',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
