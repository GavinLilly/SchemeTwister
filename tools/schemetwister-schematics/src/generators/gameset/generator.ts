/* eslint-disable jsdoc/require-jsdoc */
import * as path from 'node:path';

import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { GAME_SET_SIZE, getGamesetSize } from '@schemetwister/libtwister';
import camelCase from 'camelcase';
import * as uuid from 'uuid';

import { GamesetGeneratorSchema } from './schema';

function getRealGameSetSize(
  size: 'promo' | 'small' | 'medium' | 'large' | 'core'
) {
  switch (size) {
    case 'core':
      return GAME_SET_SIZE.core;
    case 'large':
      return GAME_SET_SIZE.large;
    case 'medium':
      return GAME_SET_SIZE.medium;
    case 'small':
      return GAME_SET_SIZE.small;
    case 'promo':
      return GAME_SET_SIZE.promo;
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export async function gamesetGenerator(
  tree: Tree,
  options: GamesetGeneratorSchema
) {
  const project = readProjectConfiguration(tree, options.series);
  const root = project.sourceRoot ?? project.root;
  const libPath = joinPathFragments(root, 'lib');
  const gameSetsPath = joinPathFragments(libPath, 'gameSets');

  const camelName = camelCase(options.name);
  const gameSetRoot = joinPathFragments(gameSetsPath, camelName);

  const realSize = getRealGameSetSize(options.size);

  const cardNumbers = getGamesetSize(realSize);

  const seriesMetaFile = tree
    .children(libPath)
    .find((path) => path.endsWith('Meta.ts'));

  const seriesMetaClass = seriesMetaFile?.substring(
    0,
    seriesMetaFile.length - 3
  );

  // eslint-disable-next-line no-undef
  generateFiles(tree, path.join(__dirname, 'files'), gameSetRoot, {
    ...options,
    camelName,
    numBystanders: cardNumbers.numBystanders,
    numHenchmen: cardNumbers.numHenchmen,
    numHeroes: cardNumbers.numHeroes,
    numMasterminds: cardNumbers.numMasterminds,
    numVillains: cardNumbers.numVillains,
    numSchemes: cardNumbers.numSchemes,
    generateUuid: () => uuid.v4(),
    seriesMetaClass,
    tpl: '',
  });

  if (cardNumbers.numHenchmen === 0) {
    const pathToHenchmenFile = joinPathFragments(
      gameSetRoot,
      `${camelName}.henchmen.ts`
    );

    tree.delete(pathToHenchmenFile);
  }

  if (cardNumbers.numBystanders === 0) {
    const pathToBystandersFile = joinPathFragments(
      gameSetRoot,
      `${camelName}.bystanders.ts`
    );

    tree.delete(pathToBystandersFile);
  }

  const gameSetIndexPath = joinPathFragments(gameSetsPath, 'index.ts');
  const gameSetIndexContents = tree.read(gameSetIndexPath)?.toString();

  const constName = options.name.toUpperCase().replaceAll(' ', '_');

  const newGameSetIndexContents =
    gameSetIndexContents + `export * as ${constName} from './${camelName}'`;

  tree.write(gameSetIndexPath, newGameSetIndexContents);

  await formatFiles(tree);
}

export default gamesetGenerator;
