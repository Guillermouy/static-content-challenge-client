export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|webp|svg)$":
      "<rootDir>/src/tests/__mocks__/fileMock.js",
    "^../config/api$": "<rootDir>/src/tests/__mocks__/api.js",
  },
  extensionsToTreatAsEsm: [".jsx"],
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
  transformIgnorePatterns: ["node_modules/(?!(@testing-library)/)"],
};
