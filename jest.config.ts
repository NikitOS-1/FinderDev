/** @type {import('jest').Config} */

const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/internal/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};

export default config;