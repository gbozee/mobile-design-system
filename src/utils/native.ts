import { createStyled } from '@emotion/primitives-core';
import {
  As,
  shouldForwardProp,
  toCSSObject,
  StyledOptions,
  ChakraComponent,
} from '@tuteria/chakra-ui-system/dist';
import { StyleSheet } from 'react-native';

/**
 * a function that returns a styled component which render styles in React Native
 */
let _styled = createStyled(StyleSheet);

export function styled<T extends As, P = {}>(
  component: T,
  options?: StyledOptions
) {
  const { baseStyle, ...styledOptions } = options ?? {};

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  const styleObject = toCSSObject({ baseStyle });
  return _styled(
    component as React.ComponentType<any>
    // styledOptions
  )(styleObject) as ChakraComponent<T, P>;
}
