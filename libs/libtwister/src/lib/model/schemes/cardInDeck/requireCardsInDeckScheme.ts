import { AbstractCardGroup } from '../../cards/abstractCardGroup';
import {
  AdditionalDeckDeckMinimal,
  HeroDeckMinimal,
  IGameSetup,
  VillainDeckMinimal,
} from '../../interfaces';
import { DECK_TYPE, DeckType, SchemeMinusRules } from '../../types';
import { IGetSetupConfig, Scheme } from '../Scheme';

import { IRequireCardBehaviour } from './requireCardBehaviour.interface';
import { IRequireCardTypeBehaviour } from './requireCardTypeBehaviour.interface';

interface IDeckRequirements<TCard extends AbstractCardGroup> {
  requireCard: IRequireCardBehaviour<TCard>;
  requireCardType: IRequireCardTypeBehaviour<TCard>;
}

export interface IRequireCardsInDeckSchemeConfig {
  heroDeckRequirements?: IDeckRequirements<AbstractCardGroup>;
  villainDeckRequirements?: IDeckRequirements<AbstractCardGroup>;
  additionalDeckRequirements?: IDeckRequirements<AbstractCardGroup>;
}

export class RequireCardsInDeckScheme extends Scheme {
  constructor(
    scheme: SchemeMinusRules,
    private _config: IRequireCardsInDeckSchemeConfig
  ) {
    super(scheme);
  }

  public override getSetup(config: IGetSetupConfig): IGameSetup {
    if (this._config.heroDeckRequirements !== undefined) {
      config.partialHeroDeck = this._setDeckRequirement(
        this._config.heroDeckRequirements,
        config,
        DECK_TYPE.hero,
        config.partialHeroDeck
      );
    }

    if (this._config.villainDeckRequirements !== undefined) {
      config.partialVillainDeck = this._setDeckRequirement(
        this._config.villainDeckRequirements,
        config,
        DECK_TYPE.villain,
        config.partialVillainDeck
      );
    }

    if (this._config.additionalDeckRequirements !== undefined) {
      config.partialAdditionalDeck = this._setDeckRequirement(
        this._config.additionalDeckRequirements,
        config,
        DECK_TYPE.additional,
        config.partialAdditionalDeck
      );
    }

    return super.getSetup(config);
  }

  private _setDeckRequirement(
    requirements: IDeckRequirements<AbstractCardGroup>,
    config: IGetSetupConfig,
    deckType: DeckType,
    deck?: HeroDeckMinimal | VillainDeckMinimal | AdditionalDeckDeckMinimal
  ) {
    const applicableStore = requirements.requireCardType.getStore(config.store);
    const cards = requirements.requireCard.getRequiredCard(applicableStore);

    const cardsAsArray = cards instanceof Array ? cards : [cards];
    const picked = cardsAsArray.map((card) => applicableStore.pickOne(card));

    const rules = this.rules[config.numPlayers];

    return requirements.requireCardType.createDeck(
      deck,
      picked,
      rules,
      deckType
    );
  }
}
