/** @type {import('jest').Config} */
/** @type {import('ts-jest').JestConfigWithTsJest} **/

const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/internal/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+.tsx?$': ['ts-jest', {}],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    axios: 'axios/dist/node/axios.cjs',
  },
  coveragePathIgnorePatterns: [
    'src/common/*',
    'src/vite-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
    },
  },
};

export default config;