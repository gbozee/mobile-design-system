import React from 'react';
import { View } from 'react-native';
import { Button } from '../button';
import { Heading as AppHeading, Spacer, Stack } from './layout';

export default {
  title: 'Components/Layout',
};

export const Spacers = () => {
  return (
    <View>
      <Spacer colorScheme={'green.200'} />
      <Spacer />
      <Spacer variant="horizontal" colorScheme={'blue.400'} />
    </View>
  );
};

export const Stacks = () => {
  return (
    <View>
      <Stack variation="vertical">
        <Button colorScheme="blue" variant="primary" text="Primary" />
        <Spacer variant="horizontal" />
        <Button colorScheme="red" variant="secondary" text="Secondary" />
      </Stack>
    </View>
  );
};

export const Heading = () => {
  return (
    <View>
      <AppHeading size="xs">Size: xs</AppHeading>
      <Spacer />
      <AppHeading size="sm">Size: sm</AppHeading>
      <Spacer />
      <AppHeading size="md">Size: md</AppHeading>
      <Spacer />
      <AppHeading size="lg">Size: lg</AppHeading>
      <Spacer />
      <AppHeading size="xl">Size: xl</AppHeading>
      <Spacer />
      <AppHeading size="2xl">Size: 2xl</AppHeading>
      <Spacer />
      <AppHeading size="3xl">Size: 3xl</AppHeading>
      <Spacer />
      <AppHeading size="4xl">Size: 4xl</AppHeading>
    </View>
  );
};
