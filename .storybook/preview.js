import React from 'react';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { TStyleProvider, fetchFonts } from '../src';
import AppLoading from 'expo-app-loading';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'mobile2',
  },
};
const MainApp = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);

  // React.useEffect(() => {
  //   if (!loaded) {
  //     fetchFonts().then(() => {
  //       setLoaded(true);
  //     });
  //   }
  // }, [loaded]);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return <TStyleProvider>{children}</TStyleProvider>;
};
export const decorators = [
  (Story) => (
    <MainApp>
      <Story />
    </MainApp>
  ),
];
