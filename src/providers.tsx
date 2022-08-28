import React, { useMemo } from 'react';
import {
  ChakraProvider,
  useTheme,
  useStyleConfig,
  useMultiStyleConfig,
} from './chakra-provider';
import { theme as restyleTheme, Theme } from './theme';
export type TStyleContextType = any;

const toThemeVars = (themeObj?: Theme): TStyleContextType => {
  const _themeObj = themeObj || restyleTheme;
  return _themeObj;
};
export const TStyleProvider: React.FC<{ theme?: Theme }> = ({
  theme,
  children,
}) => {
  const computedTheme = useMemo(() => toThemeVars(theme), [theme]);
  return <ChakraProvider theme={computedTheme}>{children}</ChakraProvider>;
};
export { useTheme, useStyleConfig, useMultiStyleConfig };
