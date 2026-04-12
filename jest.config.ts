const { getJestProjectsAsync } = require('@nx/jest');

const jestConfig = async () => ({ projects: await getJestProjectsAsync() });

export default jestConfig;
