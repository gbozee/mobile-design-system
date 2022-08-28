const { defaults: tsjPreset } = require('ts-jest/presets');
module.exports = {
  ...tsjPreset,
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.jest.json',
    },
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '/e2e',
    '@react-native',
    'cypress',
  ],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
    '<rootDir>/next-example/',
  ],
  //   setupFiles: ['<rootDir>/test/setup.ts'],
};
