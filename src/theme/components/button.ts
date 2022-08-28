import { mode, SystemStyleFunction } from '@chakra-ui/theme-tools';
import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import { FlexStyle } from 'react-native';
import { colors } from '../foundations/colors';
import { getBorder, getColor, getFontSize, getSize, getSpacing } from './utils';

const baseStyle: SystemStyleObject & FlexStyle = {
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  // paddingVertical: 15,
  width: 'auto',
  position: 'relative',
  color: colors.white,
  borderWidth: 1.7,
};
const variantPrimary: SystemStyleFunction = (props) => {
  const { colorScheme: c, active = false, isDisabled = false } = props;

  const background = active ? `${c}.600` : mode(`${c}.500`, `${c}.200`)(props);
  return {
    backgroundColor: getColor(background),
    borderColor: getColor(`${c}.500`),
    opacity: isDisabled ? 0.3 : 1,
  };
};
const variantDefault: SystemStyleFunction = (props) => {
  const { colorScheme: c, isDisabled = false } = props;

  return {
    backgroundColor: getColor(c, 500),
    borderColor: getColor(c, 500),
    opacity: isDisabled ? 0.3 : 1,
  };
};
const variantSecondary: SystemStyleFunction = (props) => {
  const { colorScheme: c, active = false, isDisabled = false } = props;
  return {
    backgroundColor: active ? getColor(c, 100) : 'transparent',
    borderColor: getColor(c, 500),
    activeOpacity: 0.7,
    borderWidth: getBorder('4px'),
    color: getColor(c, 500),
    opacity: isDisabled ? 0.3 : 1,
  };
};
const variantTertiary: SystemStyleFunction = (props) => {
  const { colorScheme: c, active = false, isDisabled = false } = props;
  return {
    backgroundColor: active ? getColor(`${c}.50`) : 'transparent',
    borderColor: 'transparent',
    activeOpacity: 0.7,
    borderWidth: getBorder('4px'),
    color: getColor(`${c}.500`),
    opacity: isDisabled ? 0.3 : 1,
  };
};
const variants = {
  default: variantDefault,
  primary: variantPrimary,
  secondary: variantSecondary,
  tertiary: variantTertiary,
};
const sizes: Record<string, SystemStyleObject & FlexStyle> = {
  lg: {
    paddingVertical: getSpacing(6),
    fontSize: getFontSize('lg'),
  },
  md: {
    paddingVertical: getSpacing(5),
    fontSize: getFontSize('md'),
  },
  sm: {
    paddingVertical: getSpacing(4),
    fontSize: getFontSize('sm'),
  },
  xs: {
    paddingVertical: getSpacing(3),
    fontSize: getFontSize('xs'),
  },
};
const defaultProps = {
  variant: 'primary',
  size: 'md',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
