const { getJestProjectsAsync } = require('@nx/jest');

const jestConfig = async () => ({ projects: await getJestProjectsAsync() });

module.exports = jestConfig;
