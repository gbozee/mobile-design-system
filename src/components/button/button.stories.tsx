import React from 'react';
import { View } from 'react-native';
import { Button } from './button';

export default {
  title: 'Components/Button',
};

export const Primary = () => {
  return (
    <View>
      <Button style={{ marginBottom: 5 }} size="sm" colorScheme="blue">
        Hello world
      </Button>
      <Button
        isDisabled
        style={{ marginBottom: 5 }}
        size="sm"
        colorScheme="blue"
      >
        Hello world
      </Button>
      <Button
        isLoading
        style={{ marginBottom: 5 }}
        size="sm"
        colorScheme="blue"
        text="Hello world"
        loadingText="Submitting.."
      />
    </View>
  );
};

export const Secondary = () => {
  return (
    <Button colorScheme="red" variant="secondary">
      Secondary Button
    </Button>
  );
};
export const Tertiary = () => {
  return (
    <View>
      <Button colorScheme="red" variant="tertiary">
        Secondary Button
      </Button>
      <Button colorScheme="red.300" variant="default">
        Secondary Button
      </Button>
    </View>
  );
};
