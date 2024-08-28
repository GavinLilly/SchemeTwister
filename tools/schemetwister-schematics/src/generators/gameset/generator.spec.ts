import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { gamesetGenerator } from './generator';
import { GamesetGeneratorSchema } from './schema';

describe('gameset generator', () => {
  let tree: Tree;
  const options: GamesetGeneratorSchema = { name: 'test', series: 'foo' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await gamesetGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
