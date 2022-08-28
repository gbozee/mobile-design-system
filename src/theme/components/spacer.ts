import { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import sizes from '../foundations/sizes';
import { getColor, getSize } from './utils';

const baseStyle: SystemStyleObject = {
  backgroundColor: 'transparent',
};

const calculateSpacing = (size: keyof typeof sizes): SystemStyleFunction => {
  return (props) => {
    const { variant = 'vertical', colorScheme: c } = props;
    return {
      height: variant === 'vertical' ? getSize(size as any) : 'auto',
      width: variant === 'horizontal' ? getSize(size as any) : 'auto',
      backgroundColor: c ? getColor(c) : 'transparent',
    };
  };
};

const supportedSizes = {
  '4xl': calculateSpacing(20),
  '3xl': calculateSpacing(16),
  '2xl': calculateSpacing(14),
  'xl': calculateSpacing(12),
  'lg': calculateSpacing(10),
  'md': calculateSpacing(9),
  'sm': calculateSpacing(8),
  'xs': calculateSpacing(7),
};
const defaultProps = {
  size: 'lg',
};

export default {
  baseStyle,
  sizes: supportedSizes,
  defaultProps,
};
