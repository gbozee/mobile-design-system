/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React from 'react';
import { ChakraProvider } from './chakra-provider';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Description = styled.Text(
  (props?: { theme: any }) => ({
    color: props?.theme?.backgroundColor || 'hotpink',
  }),
  {}
);

const Image = styled.Image`
  padding: 40px;
`;

const theme = {
  backgroundColor: 'blue',
};
export default {
  title: 'Design-System',
  decorators: [
    (Story: any) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

const emotionLogo =
  'https://cdn.rawgit.com/emotion-js/emotion/main/emotion.png';

export const Example = () => {
  return (
    <Container style={{ borderRadius: 10 }}>
      <Description style={{ fontSize: 45, fontWeight: 'bold' }}>
        Emotion Primitives
      </Description>
      <Image
        source={{
          uri: emotionLogo,
          height: 150,
          width: 150,
        }}
      />
    </Container>
  );
};
