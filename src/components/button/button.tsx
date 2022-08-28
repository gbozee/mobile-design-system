import styled from '@emotion/native';
import { SystemStyleObject } from '@tuteria/chakra-ui-system';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useStyleConfig, useTheme } from '../../providers';
import { foundations as theme, Theme } from 'theme';
import { Stack } from '../layout';
import { Text } from '../text';

interface ButtonProps {
  onPress?: () => void;
  text?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  loadingText?: string;
  textStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
  width?: number;
  _isTransparent?: boolean;
  loadColor?: ColorValue;
  icon?: React.ReactElement;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default';
  colorScheme?: Theme['colors'];
  size?: keyof typeof theme.sizes.container;
}

export const Button: React.FC<ButtonProps> = ({
  loadColor = '#fff',
  children,
  isLoading,
  loadingText,
  text,
  onPress,
  style = {},
  textStyle = {},
  isDisabled,
  variant,
  colorScheme,
  icon,
  width,
  size,
}) => {
  const { colors } = useTheme();
  const [buttonState, setButtonState] = useState({ active: false });
  const disabled = isLoading || isDisabled;
  const styles = useStyleConfig('Button', {
    variant,
    colorScheme,
    size,
    active: buttonState.active,
    isDisabled: disabled,
  } as any);
  const _textStyles = useStyleConfig('Text', {});
  const buttonStyles: SystemStyleObject = React.useMemo(() => {
    return {
      ...styles,
      ...(style as any),
      width: width ?? styles.width,
    };
  }, [styles, width, buttonState]);
  const textStyles: StyleProp<TextStyle> = React.useMemo(() => {
    return { ..._textStyles, color: buttonStyles.color, ...(textStyle as any) };
  }, [_textStyles, textStyle]);

  const onPressButton = (value: boolean) => {
    setButtonState((prev: typeof buttonState) => ({
      ...prev,
      active: value,
    }));
  };
  console.log(textStyles);
  const displayChildren = children ? (
    <Text style={textStyles}>{children}</Text>
  ) : (
    <Stack variation="horizontal" justify="center">
      {icon}
      <Text style={textStyles}>{text}</Text>
    </Stack>
  );
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => onPressButton(true)}
      onPressOut={() => onPressButton(false)}
      style={buttonStyles as any}
    >
      {!isLoading ? (
        displayChildren
      ) : (
        <ActivityIndicator animating={isLoading} size="small" />
      )}
    </Pressable>
  );
};
