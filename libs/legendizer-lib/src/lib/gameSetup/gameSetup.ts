import { IGameSet } from '../gamesets';
import { IGameSetup } from './gameSetup.interface';
import { Schemes, IScheme } from '../schemes';
import { Masterminds, IMastermind } from '../masterminds';
import { Heroes, IHero } from '../heroes';
import { CardType } from '../cardSet';
import { Henchmen } from '../henchmen';
import { IHenchmen } from '../henchmen/henchmen.interface';
import { IVillainGroup, VillainGroups } from '../villains';

export class GameSetup {
  constructor(private gameSets: IGameSet[], private numPlayers: number) {}

  public generateGame(): IGameSetup {
    const schemes: Schemes = new Schemes(
      Schemes.GetAllSchemes(),
      this.gameSets
    );
    const scheme: IScheme = schemes.shuffle();

    const masterminds: Masterminds = new Masterminds(
      Masterminds.GetAllMasterminds(),
      this.gameSets
    );
    const mastermind: IMastermind = masterminds.shuffle();

    const requiredHero: IHero[] = [];
    const requiredHenchmen: IHenchmen[] = [];
    const requiredVillains: IVillainGroup[] = [];

    if (scheme.requiredCards.inVillainDeck !== undefined) {
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

    switch (mastermind.alwaysLeads.cardType) {
      case CardType.HENCHMEN:
        requiredHenchmen.push(scheme.requiredCards.inVillainDeck as IHenchmen);
        break;
      case CardType.VILLAINGROUP:
        requiredVillains.push(
          scheme.requiredCards.inVillainDeck as IVillainGroup
        );
        break;
    }

    const heroes: Heroes = new Heroes(Heroes.GetAllHeroes(), this.gameSets);
    const selectedHeroes: IHero[] = heroes.shuffle(
      scheme.rules.heroDeck.numHeroes[this.numPlayers],
      undefined,
      requiredHero
    );

    const henchmen: Henchmen = new Henchmen(
      Henchmen.GetAllHenchmen(),
      this.gameSets
    );
    const selectedHenchmen: IHenchmen[] = henchmen.shuffle(
      scheme.rules.villainDeck.numHenchmenGroups[this.numPlayers],
      requiredHenchmen
    );

    const villains: VillainGroups = new VillainGroups(
      VillainGroups.GetAllVillainGroups(),
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
