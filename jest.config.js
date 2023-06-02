const nextJest = require('next/jest.js');
 
const createJestConfig = nextJest({ dir: './' });
 
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  testEnvironment: 'jest-environment-jsdom',
};
 
module.exports = createJestConfig(config); 
