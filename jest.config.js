/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
    "^.+\\.js$": "babel-jest" // Transform ESM JavaScript files using babel-jest
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".js"], // Treat .js files as ESM
  transformIgnorePatterns: ["/node_modules/"], // Ignore transformation for node_modules unless necessary
};
