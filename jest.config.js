module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: [
    '<rootDir>/setupJest.ts'
  ],
  transformIgnorePatterns: ['/node_modules/']
};
