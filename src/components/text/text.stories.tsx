import React from 'react';
import { View } from 'react-native';
import { Stack } from '../layout';
import { Text } from './text';

export default {
  title: 'Components/Text',
};

export const Sizes = () => {
  return (
    <View>
      <Stack>
        <Text size="6xl" colorScheme="red.300">
          (6xl) In love with React & Next
        </Text>
        <Text size="5xl" colorScheme={'blue.500'}>
          (5xl) In love with React & Next
        </Text>
        <Text size="4xl">(4xl) In love with React & Next</Text>
        <Text size="3xl">(3xl) In love with React & Next</Text>
        <Text size="2xl">(2xl) In love with React & Next</Text>
        <Text size="xl">(xl) In love with React & Next</Text>
        <Text size="lg">(lg) In love with React & Next</Text>
        <Text size="md">(md) In love with React & Next</Text>
        <Text size="sm">(sm) In love with React & Next</Text>
        <Text size="xs">(xs) In love with React & Next</Text>
      </Stack>
    </View>
  );
};

export const Variants = () => {
  return (
    <Stack>
      <Text variant="default" colorScheme="red.300">
        Default
      </Text>
      <Text variant="bold" colorScheme={'blue.500'}>
        Bold
      </Text>
      <Text variant="header">Header variant</Text>
      <Text variant="fieldLabel">Field label Variant</Text>
      <Text variant="subtitle">Subtitle</Text>
    </Stack>
  );
};
