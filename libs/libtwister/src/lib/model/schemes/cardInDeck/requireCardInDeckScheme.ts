import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import { IGameSetup } from '../../interfaces';
import { DeckType, SchemeMinusRules } from '../../types';
import { IGetSetupConfig, Scheme } from '../Scheme';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';
import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

export class RequireCardInDeckScheme<
  TCard extends AbstractCardGroup
> extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _requireCard: IRequireCardBehaviour<TCard>,
    private _requireCardType: IRequireCardTypeBehaviour<TCard>,
    private _deck: DeckType
  ) {
    super(scheme);
  }

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    const applicableStore = this._requireCardType.getStore(config.store);
    const cards = this._requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = cards instanceof Array ? cards : [cards];
    const picked = cardsAsArray.map((card) => applicableStore.pickOne(card));

    const rules = this.rules[config.numPlayers];

    switch (this._deck) {
      case 'HERO':
        return super.getSetup({
          ...config,
          partialHeroDeck: this._requireCardType.createDeck(
            config.partialHeroDeck,
            picked,
            rules,
            this._deck
          ),
        });
      case 'VILLAIN':
        return super.getSetup({
          ...config,
          partialVillainDeck: this._requireCardType.createDeck(
            config.partialVillainDeck,
            picked,
            rules,
            this._deck
          ),
        });
      case 'ADDITIONAL':
        return super.getSetup({
          ...config,
          partialAdditionalDeck: this._requireCardType.createDeck(
            config.partialAdditionalDeck,
            picked,
            rules,
            this._deck
          ),
        });
    }
  }
}
