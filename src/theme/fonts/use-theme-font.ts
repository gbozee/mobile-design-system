import * as Font from 'expo-font';

export const fetchFonts = () => {
  return Font.loadAsync({
    InterRegular: require('./inter/Inter-Regular.ttf'),
    InterMedium: require('./inter/Inter-Medium.ttf'),
    InterSemiBold: require('./inter/Inter-SemiBold.ttf'),
    InterBold: require('./inter/Inter-Bold.ttf'),
    InterXBold: require('./inter/Inter-ExtraBold.ttf'),
  });
};
