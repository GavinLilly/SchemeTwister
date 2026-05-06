import { nanoid } from 'nanoid';
import * as uuid from 'uuid';

import {
  AbstractCardGroup,
  Bystander,
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
import {
  getGamesetSize,
  IGameSetSizeWithoutHeroes,
} from '../utils/getGameSetSize';
import { randomInteger } from '../utils/randomInteger';
import {
  FakeCardFactory,
  IHeroTeamConfig,
} from '@schemetwister/libtwister/testing/data';

interface IMockGameSetConfig extends IGameSetSizeWithoutHeroes {
  heroes: IHeroTeamConfig;
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
    if (config === undefined) {
      const gameSetSize = getGamesetSize(size);

      this._config = {
        ...gameSetSize,
        heroes: {
          num: gameSetSize.numHeroes,
        },
      };
    } else {
      this._config = config;
    }

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

    const fakeCardFactory = new FakeCardFactory();

    this._heroes = fakeCardFactory.createHeroes(this._config.heroes);
    this._villains = fakeCardFactory.createVillainGroups(
      this._config.numVillains
    );
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

  private readonly _buildPartialCard = <T extends AbstractCardGroup>(
    cardType: string,
    num: number
  ): Pick<T, 'id' | 'name' | 'gameSet'> => ({
    id: uuid.v4(),
    name: `Test ${cardType} - ${this._gameSetShortId} - ${num + 1}`,
    gameSet: this._meta,
  });

  private readonly _buildFightable = <
    T extends AbstractFightableCardGroup
  >(): Pick<T, 'attackPoints' | 'victoryPoints'> => ({
    attackPoints: randomInteger(10),
    victoryPoints: randomInteger(10),
  });
}
