module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-optional-catch-binding'],
    'react-native-reanimated/plugin', // This line.
  ],
  // plugins: ['transform-class-properties', 'istanbul'],
};
