import React from 'react';
import { View, Text } from 'react-native';
import { getColor } from '../theme/components/utils';
import { colors as appColors } from '../theme/foundations/colors';
import { nChakra } from '../utils';
export default {
  title: 'Primitives',
};

const textStyles = (v: string, color = 'black') => {
  return {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: v,
    marginBottom: 3,
    color,
  };
};
type KeyType = keyof typeof appColors;
type NumberType = keyof typeof appColors.blue;
export const Colors = () => {
  return (
    <View>
      {Object.keys(appColors).map((colorKey: string) => {
        const v = appColors[colorKey as KeyType];
        if (typeof v === 'string') {
          return (
            <Text style={textStyles(v, 'white')}>{`${colorKey} - ${v}`}</Text>
          );
        }
        return (
          <>
            {Object.keys(v).map((ck: string) => {
              let u = v[ck as unknown as NumberType];
              let white = parseInt(ck) > 600 || ['dm'].includes(colorKey);
              return (
                <Text style={textStyles(u, white ? 'white' : 'black')}>
                  {`${colorKey}.${ck} - ${u}`}
                </Text>
              );
            })}
          </>
        );
      })}
    </View>
  );
};

export const EnhancedView = () => {
  return (
    <nChakra.View __css={{ backgroundColor: getColor('dm.200') }}>
      <nChakra.Text color={'black'}>Sample Text</nChakra.Text>
    </nChakra.View>
  );
};
