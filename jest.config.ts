export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.js',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};