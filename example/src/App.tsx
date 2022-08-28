import { Button, fetchFonts, TStyleProvider } from '@tuteria/mobile-components';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => { }, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <TStyleProvider>
      <View style={{ marginTop: 100 }}>
        <Button colorScheme="blue" size="xs" text="Primary" />
        <Button
          colorScheme="green"
          variant="tertiary"
          size="xs"
          text="Tertiary"
        />
        <Button
          variant="secondary"
          colorScheme="red"
          text="Secondary"
        />

        <Button
          variant="secondary"
          colorScheme="red"
        >Third Button</Button>
      </View>
    </TStyleProvider>
  );
}
