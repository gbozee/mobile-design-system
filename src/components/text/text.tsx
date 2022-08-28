import { StyleProp, TextStyle } from 'react-native';
import { nChakra } from '../../utils';
import React from 'react';
import type { Theme } from 'theme';
import { useStyleConfig } from '../../providers';

export const Text: React.FC<{
  text?: string;
  colorScheme?: string;
  style?: StyleProp<TextStyle>;
  size?: keyof Theme['sizes'];
  variant?: 'default' | 'bold' | 'header' | 'fieldLabel' | 'subtitle';
}> = ({ children, text, variant, size, colorScheme, style = {} }) => {
  const themeStyle = useStyleConfig('Text', {
    variant,
    size,
    colorScheme,
  } as any);
  const textStyle = React.useMemo(() => {
    return { ...themeStyle, ...(style as any) };
  }, [themeStyle, style]);
  return <nChakra.Text __css={textStyle}>{text || children}</nChakra.Text>;
};
