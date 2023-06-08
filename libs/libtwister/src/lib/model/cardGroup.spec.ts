import { AbstractCardGroup } from './cardGroup';

describe('CardGroup', () => {
  describe('that is empty', () => {
    it('should create', () => expect(AbstractCardGroup.empty()).toBeDefined());
  });
});
