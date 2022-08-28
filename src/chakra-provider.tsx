import { IdProvider } from '@chakra-ui/hooks';
import {
  Dict,
  filterUndefined,
  memoizedGet as get,
  mergeWith,
  omit,
  runIfFn,
} from '@chakra-ui/utils';
import { ThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';
import {
  ColorModeProvider,
  SystemStyleObject,
  ThemeTypings,
  useColorMode,
} from '@tuteria/chakra-ui-system/dist';
import { Theme } from './theme';
import { ChakraProviderProps } from '@tuteria/chakra-ui-system/dist/src/chakra-provider';
import React from 'react';
import isEqual from 'react-fast-compare';

export const useTheme = () => {
  const _theme = useEmotionTheme() as Theme;
  return _theme;
};

export const ChakraProvider: React.FC<ChakraProviderProps> = (props) => {
  const { children, colorModeManager, theme = {} } = props;

  return (
    <IdProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider
          colorModeManager={colorModeManager}
          options={theme.config || {}}
        >
          {children}
        </ColorModeProvider>
      </ThemeProvider>
    </IdProvider>
  );
};

export function useChakra() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}

export interface ThemingProps<ThemeComponent extends string = string> {
  variant?: ThemeComponent extends keyof ThemeTypings['components']
    ? ThemeTypings['components'][ThemeComponent]['variants']
    : never;
  size?: ThemeComponent extends keyof ThemeTypings['components']
    ? ThemeTypings['components'][ThemeComponent]['sizes']
    : never;
  colorScheme?: ThemeTypings['colorSchemes'];
  orientation?: 'vertical' | 'horizontal';
  styleConfig?: Dict;
}

export function useStyleConfig(
  themeKey: string,
  props: ThemingProps & Dict,
  opts: { isMultiPart: true }
): Record<string, SystemStyleObject>;

export function useStyleConfig(
  themeKey: string,
  props?: ThemingProps & Dict,
  opts?: { isMultiPart?: boolean }
): SystemStyleObject;

export function useStyleConfig(themeKey: any, props: any = {}, opts: any = {}) {
  const { styleConfig: styleConfigProp, ...rest } = props;

  const { theme, colorMode } = useChakra();
  const themeStyleConfig = get(theme, `components.${themeKey}`);
  const styleConfig = styleConfigProp || themeStyleConfig;

  const mergedProps = mergeWith(
    { theme, colorMode },
    styleConfig?.defaultProps ?? {},
    filterUndefined(omit(rest, ['children']))
  );

  /**
   * Store the computed styles in a `ref` to avoid unneeded re-computation
   */
  type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;
  const stylesRef = React.useRef<StylesRef>({});

  if (styleConfig) {
    const baseStyles = runIfFn(styleConfig.baseStyle ?? {}, mergedProps);

    const variants = runIfFn(
      styleConfig.variants?.[mergedProps.variant] ?? {},
      mergedProps
    );

    const sizes = runIfFn(
      styleConfig.sizes?.[mergedProps.size] ?? {},
      mergedProps
    );

    const styles = mergeWith({}, baseStyles, sizes, variants);

    if (opts?.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach((part: string) => {
        styles[part] = styles[part] ?? {};
      });
    }

    const isStyleEqual = isEqual(stylesRef.current, styles);

    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }

  return stylesRef.current;
}

export function useMultiStyleConfig(themeKey: string, props: any) {
  return useStyleConfig(themeKey, props, { isMultiPart: true });
}
