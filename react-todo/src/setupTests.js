// src/setupTests.js
import '@testing-library/jest-dom';

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  // Uncomment to ignore console.log/warn/error in tests
  // log: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Setup any global test utilities or mocks here
beforeEach(() => {
  // Reset any mocks before each test
  jest.clearAllMocks();
});
