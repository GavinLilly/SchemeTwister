import { IGameSet } from '../gamesets';
import { IGameSetup } from './gameSetup.interface';
import { Schemes, IScheme } from '../schemes';
import { Masterminds, IMastermind } from '../masterminds';
import { Heroes, IHero } from '../heroes';
import { CardType } from '../cardSet';
import { Henchmen } from '../henchmen';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup, VillainGroups } from '../villains';
import { isArray } from 'util';

type numPlayersRange = 2 | 3 | 4 | 5;

export class GameSetup {
  private gameSets: IGameSet[];

  constructor(
    gameSets: IGameSet[] | IGameSet,
    private numPlayers: numPlayersRange
    ) {
    if (gameSets === undefined || (isArray(gameSets) && gameSets.length === 0))
      throw new Error('At least 1 game set must be chosen');

    if (isArray(gameSets))
      this.gameSets = gameSets
    else
      this.gameSets = [gameSets]
  }

  public generateGame(): IGameSetup {
    const schemes: Schemes = new Schemes(Schemes.ALL, this.gameSets);
    const scheme: IScheme = schemes.shuffle();

    const masterminds: Masterminds = new Masterminds(
      Masterminds.ALL,
      this.gameSets
    );
    const mastermind: IMastermind = masterminds.shuffle();

    const requiredHero: IHero[] = [];
    const requiredHenchmen: IHenchmen[] = [];
    const requiredVillains: IVillainGroup[] = [];

    if (
      scheme.requiredCards !== undefined &&
      scheme.requiredCards.inVillainDeck !== undefined
    ) {
      switch (scheme.requiredCards.inVillainDeck.cardType) {
        case CardType.HERO:
          requiredHero.push(scheme.requiredCards.inVillainDeck);
          break;
        case CardType.HENCHMEN:
          requiredHenchmen.push(
            scheme.requiredCards.inVillainDeck as IHenchmen
          );
          break;
        case CardType.VILLAINGROUP:
          requiredVillains.push(
            scheme.requiredCards.inVillainDeck as IVillainGroup
          );
          break;
      }
    }

    if (mastermind.alwaysLeads.cardType === CardType.HENCHMEN)
      requiredHenchmen.push(mastermind.alwaysLeads as IHenchmen);
    else if (mastermind.alwaysLeads.cardType === CardType.VILLAINGROUP)
      requiredVillains.push(mastermind.alwaysLeads as IVillainGroup);

    const heroes: Heroes = new Heroes(Heroes.ALL, this.gameSets);
    const selectedHeroes: IHero[] = heroes.shuffle(
      scheme.rules.heroDeck.numHeroes[this.numPlayers],
      undefined,
      requiredHero
    );

    const henchmen: Henchmen = new Henchmen(Henchmen.ALL, this.gameSets);
    let selectedHenchmen: IHenchmen[] = henchmen.shuffle(
      scheme.rules.villainDeck.numHenchmenGroups[this.numPlayers],
      requiredHenchmen
    );
    if (!isArray(selectedHenchmen))
      selectedHenchmen = [selectedHenchmen]

    const villains: VillainGroups = new VillainGroups(
      VillainGroups.ALL,
      this.gameSets
    );
    const selectedVillains: IVillainGroup[] = villains.shuffle(
      scheme.rules.villainDeck.numVillainGroups[this.numPlayers],
      requiredVillains
    );

    const setup: IGameSetup = {
      numPlayers: this.numPlayers,
      scheme: scheme,
      mastermind: mastermind,
      heroDeck: selectedHeroes,
      villainDeck: {
        hero:
          scheme.requiredCards !== undefined &&
          scheme.requiredCards.inVillainDeck !== undefined &&
          scheme.requiredCards.inVillainDeck.cardType === CardType.HERO
            ? scheme.requiredCards.inVillainDeck
            : undefined,
        henchmen: selectedHenchmen,
        villains: selectedVillains,
      },
    };

    return setup;
  }
}
