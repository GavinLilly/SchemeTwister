import { nanoid } from 'nanoid';
import * as uuid from 'uuid';

import {
  AbstractCardGroup,
  Bystander,
  GAME_SET_SIZE,
  GameSet,
  GameSetSize,
  Henchmen,
  Hero,
  IGameSetMeta,
  ITeam,
  Mastermind,
  SchemeDefinition,
  SeriesMeta,
  VillainGroup,
} from '../model';
import { AbstractFightableCardGroup } from '../model/cards/abstractFightableCardGroup';
import { randomInteger } from '../utils/randomInteger';

interface IHeroTeamConfig {
  num: number;
  teams?: {
    numberOfTeams: number;
    heroesPerTeam: number;
  };
}

interface IMockGameSetConfig {
  heroes: IHeroTeamConfig;
  numMasterminds: number;
  numVillains: number;
  numHenchmen: number;
  numBystanders: number;
  numSchemes: number;
}

export class GameSetMock {
  private readonly _gameSetShortId = nanoid(4);
  private readonly _config: IMockGameSetConfig;

  private readonly _meta: IGameSetMeta;

  private readonly _heroes: Hero[];
  private readonly _villains: VillainGroup[];
  private readonly _masterminds: Mastermind[];
  private readonly _henchmen: Henchmen[];
  private readonly _schemes: SchemeDefinition[];
  private readonly _bystanders: Bystander[];

  constructor(
    size: GameSetSize,
    config?: IMockGameSetConfig,
    seriesMeta?: SeriesMeta
  ) {
    this._config = config ?? this._getConfigSizes(size);

    const series =
      seriesMeta ??
      new SeriesMeta(
        uuid.v4(),
        `Test Series ${this._gameSetShortId}`,
        'Test Series'
      );

    this._meta = {
      id: uuid.v4(),
      name: `Test Game Set ${this._gameSetShortId}`,
      releaseYear: randomInteger(1970, 2024),
      series,
      size,
    };

    this._heroes = this._buildHeroes();
    this._villains = this._buildVillains();
    this._masterminds = this._buildMasterminds();
    this._henchmen = this._buildHenchmen();
    this._schemes = this._buildSchemes();
    this._bystanders = this._buildBystanders();
  }

  public getGameSet = () =>
    new GameSet(
      this._meta,
      this._heroes,
      this._masterminds.length > 0 ? this._masterminds : undefined,
      this._schemes.length > 0 ? this._schemes : undefined,
      this._villains.length > 0 ? this._villains : undefined,
      this._henchmen.length > 0 ? this._henchmen : undefined,
      this._bystanders.length > 0 ? this._bystanders : undefined
    );

  private _buildHeroes(): Hero[] {
    const numTeamHeroes =
      (this._config.heroes.teams?.heroesPerTeam ?? 0) *
      (this._config.heroes.teams?.numberOfTeams ?? 0);

    if (numTeamHeroes > this._config.heroes.num) {
      throw new Error(
        'The number of heroes in specific teams is greater than the number of total heroes'
      );
    }

    const teams: ITeam[] = [];
    const numberOfTeams = this._config.heroes.teams?.numberOfTeams ?? 0;
    for (let i = 0; i < numberOfTeams; i++) {
      teams.push({
        name: `Test Team - ${this._gameSetShortId} - ${i + 1}`,
        icon: 'N/A',
      });
    }

    let currentTeam = 0;

    const heroes: Hero[] = [];
    for (let i = 0; i < this._config.heroes.num; i++) {
      let team = undefined;
      if (
        currentTeam < numberOfTeams &&
        this._config.heroes.teams !== undefined
      ) {
        team = teams[currentTeam];

        if (
          (heroes.length + 1) % this._config.heroes.teams.heroesPerTeam ===
          0
        ) {
          currentTeam++;
        }
      }

      const hero = new Hero({
        ...this._buildPartialCard('Hero', i),
        team,
      });
      heroes.push(hero);
    }

    return heroes;
  }

  private _buildVillains(): VillainGroup[] {
    const villains: VillainGroup[] = [];
    for (let i = 0; i < this._config.numVillains; i++) {
      const villain = new VillainGroup(
        this._buildPartialCard('Villain Group', i)
      );
      villains.push(villain);
    }

    return villains;
  }

  private _buildBystanders(): Bystander[] {
    const bystanders: Bystander[] = [];
    for (let i = 0; i < this._config.numBystanders; i++) {
      const bystander = new Bystander({
        ...this._buildPartialCard('Bystander', i),
        copies: 1,
      });
      bystanders.push(bystander);
    }

    return bystanders;
  }

  private _buildMasterminds(): Mastermind[] {
    const masterminds: Mastermind[] = [];
    for (let i = 0; i < this._config.numMasterminds; i++) {
      const villainNum = Math.min(i, this._villains.length - 1);
      const villain = this._villains[villainNum];
      const mastermind = new Mastermind({
        ...this._buildPartialCard('Mastermind', i),
        ...this._buildFightable(),
        alwaysLeads: [villain],
        masterStrike: '',
      });
      masterminds.push(mastermind);
    }

    return masterminds;
  }

  private _buildHenchmen(): Henchmen[] {
    const henchmens: Henchmen[] = [];
    for (let i = 0; i < this._config.numHenchmen; i++) {
      const henchmen = new Henchmen({
        ...this._buildPartialCard('Henchmen', i),
        ...this._buildFightable(),
        fight: '',
      });
      henchmens.push(henchmen);
    }

    return henchmens;
  }

  private _buildSchemes(): SchemeDefinition[] {
    const schemes: SchemeDefinition[] = [];
    for (let i = 0; i < this._config.numSchemes; i++) {
      const scheme = new SchemeDefinition({
        ...this._buildPartialCard('Scheme', i),
        setup: 'Setup',
        twist: 'Twist',
        evilWins: 'Evil wins',
        meta: { numTwists: 8 },
      });
      schemes.push(scheme);
    }

    return schemes;
  }

  private _buildPartialCard = <T extends AbstractCardGroup>(
    cardType: string,
    num: number
  ): Pick<T, 'id' | 'name' | 'gameSet'> => ({
    id: uuid.v4(),
    name: `Test ${cardType} - ${this._gameSetShortId} - ${num + 1}`,
    gameSet: this._meta,
  });

  private _buildFightable = <T extends AbstractFightableCardGroup>(): Pick<
    T,
    'attackPoints' | 'victoryPoints'
  > => ({ attackPoints: randomInteger(10), victoryPoints: randomInteger(10) });

  private _getConfigSizes(gameSetSize: GameSetSize): IMockGameSetConfig {
    switch (gameSetSize) {
      case GAME_SET_SIZE.core:
      case GAME_SET_SIZE.large:
        return {
          heroes: {
            num: 15,
          },
          numMasterminds: 5,
          numVillains: 6,
          numHenchmen: 2,
          numBystanders: 1,
          numSchemes: 4,
        };
      case GAME_SET_SIZE.medium:
        return {
          heroes: {
            num: 9,
          },
          numMasterminds: 3,
          numVillains: 4,
          numHenchmen: 2,
          numBystanders: 3,
          numSchemes: 4,
        };
      case GAME_SET_SIZE.small:
        return {
          heroes: {
            num: 5,
          },
          numMasterminds: 2,
          numVillains: 2,
          numHenchmen: 0,
          numBystanders: 0,
          numSchemes: 4,
        };
      default:
        return {
          heroes: {
            num: 5,
          },
          numMasterminds: 1,
          numVillains: 1,
          numHenchmen: 0,
          numBystanders: 1,
          numSchemes: 1,
        };
    }
  }
}
