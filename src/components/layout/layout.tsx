import React from 'react';
import { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useStyleConfig } from '../../chakra-provider';
import { nChakra } from '../../utils';

export const Spacer: React.FC<{
  variant?: 'horizontal' | 'vertical';
  colorScheme?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}> = ({ variant, colorScheme, size }) => {
  const styles = useStyleConfig('Spacer', {
    variant,
    colorScheme,
    size,
  } as any);
  return <nChakra.View __css={styles} />;
};

export const Stack: React.FC<{
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  variation?: 'horizontal' | 'vertical';
  backgroundColor?: ColorValue;
  flexGrow?: number;
}> = ({
  children,
  align,
  justify,
  variation = 'vertical',
  backgroundColor = 'transparent',
  flexGrow,
}) => {
  return (
    <nChakra.View
      {...{
        flexDirection: variation === 'horizontal' ? 'row' : 'column',
        backgroundColor: backgroundColor as any,
        justifyContent: justify,
        alignItems: align,
        flexGrow,
        position: 'relative',
      }}
    >
      {children}
    </nChakra.View>
  );
};

export const Heading: React.FC<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  style?: StyleProp<TextStyle>;
}> = ({ children, size, style = {} }) => {
  const styles: any = useStyleConfig('Heading', {
    size,
  } as any);
  const textStyles = React.useMemo(() => {
    return { ...styles, ...(style as any) };
  }, [styles, style]);

  return <nChakra.Text __css={textStyles}>{children}</nChakra.Text>;
};
