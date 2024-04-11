import {
  RequireCardInDeckScheme,
  VillainGroup,
  SchemeMinusRules,
  RequireCard,
  RequireVillainGroup,
  DECK_TYPE,
  IGameSetup,
  numPlayers as numPlayersCount,
  ISetupConfigWithStore,
} from '@schemetwister/libtwister';

/**
 * This scheme class checks if Lilith is the mastermind and if so it sets the number of twists to 1.
 */
export class RitualSacrificeToSummonChthonScheme extends RequireCardInDeckScheme<VillainGroup> {
  constructor(
    scheme: SchemeMinusRules,
    requiredVillain: RequireCard<VillainGroup>
  ) {
    super(
      scheme,
      requiredVillain,
      new RequireVillainGroup(),
      DECK_TYPE.villain
    );
  }

  public override getSetup(config: ISetupConfigWithStore): IGameSetup {
    if (config.mastermind?.name.includes('Lilith')) {
      numPlayersCount.forEach(
        (num) => (this.rules[num].villainDeck.numTwists = 1)
      );
    }

    return super.getSetup(config);
  }
}
