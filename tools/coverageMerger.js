const { glob } = require('glob');
const fs = require('node:fs/promises');
const path = require('node:path');

(async function () {
  const coverageDir = 'coverage';

  const files = await glob(`${coverageDir}/**/lcov.info`);

  let mergedReport = '';
  for (const file of files) {
    mergedReport += await fs.readFile(file);
  }

  await fs.writeFile(
    path.resolve(`./${coverageDir}/lcov.info`),
    mergedReport,
    (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }
  );
})();
