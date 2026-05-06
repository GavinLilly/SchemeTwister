import { faker } from '@faker-js/faker';
import {
  Bystander,
  BystanderConfig,
  GAME_SET_SIZE,
  Henchmen,
  HenchmenConfig,
  Hero,
  HeroConfig,
  IGameSetMeta,
  IMastermind,
  IPlayableObject,
  ITeam,
  Mastermind,
  SchemeDefinition,
  SchemeDefinitionConfig,
  SeriesMeta,
  VillainGroup,
} from '@schemetwister/libtwister';

export interface IHeroTeamConfig {
  num: number;
  teams?: {
    numberOfTeams: number;
    heroesPerTeam: number;
  };
  gameset?: IGameSetMeta;
}

export class FakeCardFactory {
  constructor(seed?: number) {
    faker.seed(seed);
  }

  public createHeroes(config: IHeroTeamConfig): Hero[] {
    const numTeamHeroes =
      (config.teams?.heroesPerTeam ?? 0) * (config.teams?.numberOfTeams ?? 0);

    if (numTeamHeroes > config.num) {
      throw new Error(
        `The number of heroes in specific teams (${numTeamHeroes}) is greater than the number of total heroes (${config.num})`
      );
    }

    const numberOfTeams = config.teams?.numberOfTeams ?? 0;
    const teams = faker.helpers.multiple(() => this.createTeam(), {
      count: numberOfTeams,
    });

    let currentTeam = 0;

    const heroes: Hero[] = [];
    for (let i = 0; i < config.num; i++) {
      let team = undefined;
      if (currentTeam < numberOfTeams && config.teams !== undefined) {
        team = teams[currentTeam];

        if ((heroes.length + 1) % config.teams.heroesPerTeam === 0) {
          currentTeam++;
        }
      }

      const hero = this.createHero({ team, gameSet: config.gameset });
      heroes.push(hero);
    }

    return heroes;
  }

  public createHero(overwrites: Partial<HeroConfig> = {}): Hero {
    const {
      id = faker.string.uuid(),
      name = this._createSuperName(),
      gameSet = this.createGamesetMeta(),
      keywords = this.maybeCreateKeywords(),
      team = faker.helpers.maybe(() => this.createTeam(), {
        probability: 0.65,
      }),
    } = overwrites;

    return new Hero({ id, name, gameSet, keywords, team });
  }

  public createHenchmens = (count?: number) =>
    faker.helpers.multiple(() => this.createHenchmen(), { count });

  public createHenchmen(overwrites: Partial<HenchmenConfig> = {}): Henchmen {
    const {
      id = faker.string.uuid(),
      name = 'The ' + this._createSuperName(),
      attackPoints = faker.number.int(3),
      gameSet = this.createGamesetMeta(),
      victoryPoints = faker.helpers.maybe(() => faker.number.int(2), {
        probability: 0.75,
      }),
      keywords = this.maybeCreateKeywords(),
      ability = faker.helpers.maybe(() => faker.lorem.sentence()),
      ambush = faker.helpers.maybe(() => faker.lorem.sentence()),
      escape = faker.helpers.maybe(() => faker.lorem.sentence()),
      fight = faker.helpers.maybe(() => faker.lorem.sentence()),
      finishThePrey = faker.helpers.maybe(() => faker.lorem.sentence()),
    } = overwrites;

    return new Henchmen({
      id,
      name,
      attackPoints,
      gameSet,
      victoryPoints,
      keywords,
      ability,
      ambush,
      escape,
      fight,
      finishThePrey,
    });
  }

  public createVillainGroups = (count?: number) =>
    faker.helpers.multiple(() => this.createVillainGroup(), { count });

  public createVillainGroup(
    overwrites: Partial<IPlayableObject> = {}
  ): VillainGroup {
    const {
      id = faker.string.uuid(),
      name = 'The ' + this._createSuperName(),
      gameSet = this.createGamesetMeta(),
      keywords = this.maybeCreateKeywords(),
    } = overwrites;

    return new VillainGroup({
      id,
      name,
      gameSet,
      keywords,
    });
  }

  public createMasterminds = (count?: number) =>
    faker.helpers.multiple(() => this.createMastermind(), { count });

  public createMastermind(overwrites: Partial<IMastermind> = {}): Mastermind {
    const {
      id = faker.string.uuid(),
      name = this._capitalise(faker.word.noun()),
      attackPoints = faker.number.int(25),
      victoryPoints = faker.number.int({ min: 5, max: 10 }),
      gameSet = this.createGamesetMeta(),
      masterStrike = faker.lorem.sentence(),
      alwaysLeads = faker.helpers.multiple(
        () =>
          faker.datatype.boolean()
            ? this.createVillainGroup()
            : this.createHenchmen(),
        { count: { min: 1, max: 2 } }
      ),
      keywords = this.maybeCreateKeywords(),
      mastermindWins = faker.lorem.sentence(),
      specialRules = faker.lorem.sentence(),
    } = overwrites;

    return new Mastermind({
      id,
      name,
      attackPoints,
      victoryPoints,
      gameSet,
      masterStrike,
      alwaysLeads,
      keywords,
      mastermindWins,
      specialRules,
    });
  }

  public createBystanders = (count?: number) =>
    faker.helpers.multiple(() => this.createBystander(), { count });

  public createBystander(overwrites: Partial<BystanderConfig> = {}): Bystander {
    const {
      id = faker.string.uuid(),
      name = faker.person.fullName(),
      copies = faker.number.int(30),
      gameSet = this.createGamesetMeta(),
      keywords = this.maybeCreateKeywords(),
      victoryPoints = faker.helpers.maybe(() => faker.number.int(5)),
    } = overwrites;

    return new Bystander({
      id,
      name,
      copies,
      gameSet,
      keywords,
      victoryPoints,
    });
  }

  public createSchemes = (count?: number) =>
    faker.helpers.multiple(() => this.createScheme(), { count });

  public createScheme(
    overwrites: Partial<SchemeDefinitionConfig> = {}
  ): SchemeDefinition {
    const {
      id = faker.string.uuid(),
      name = `${faker.word.verb()} ${faker.word.conjunction()} ${faker.word.sample()}`,
      evilWins = faker.lorem.sentence(),
      gameSet = this.createGamesetMeta(),
      setup = faker.lorem.sentence(),
      twist = faker.lorem.sentences(),
      keywords = this.maybeCreateKeywords(),
      specialRules = faker.helpers.maybe(() => faker.lorem.sentence()),
    } = overwrites;

    const meta = overwrites.meta ?? {
      numTwists: faker.number.int(11),
    };

    return new SchemeDefinition({
      id,
      name,
      evilWins,
      gameSet,
      setup,
      twist,
      keywords,
      specialRules,
      meta,
    });
  }

  public createGamesetMeta(
    overwrites: Partial<IGameSetMeta> = {}
  ): IGameSetMeta {
    const {
      id = faker.string.uuid(),
      name = faker.commerce.productName(),
      releaseYear = faker.date.past().getFullYear(),
      series = this.createSeries(),
      size = faker.helpers.objectValue(GAME_SET_SIZE),
    } = overwrites;

    return { id, name, releaseYear, series, size };
  }

  public readonly createSeries = () =>
    new SeriesMeta(
      faker.string.uuid(),
      faker.commerce.productName(),
      faker.commerce.productDescription()
    );

  public createTeam(): ITeam {
    const name = faker.company.name();

    return {
      name,
      icon: `${faker.helpers.slugify(name)}.png`,
    };
  }

  public readonly maybeCreateKeywords = () =>
    faker.helpers.maybe(() =>
      faker.helpers.multiple(() => this.createKeyword(), {
        count: faker.number.int(5),
      })
    );

  public readonly createKeyword = () => ({
    id: faker.string.uuid(),
    name:
      this._capitalise(faker.word.adjective()) +
      ' ' +
      this._capitalise(faker.word.verb()),
    description: faker.lorem.paragraph(),
  });

  private readonly _createSuperName = () =>
    this._capitalise(faker.word.adjective()) +
    ' ' +
    this._capitalise(faker.word.noun());

  private readonly _capitalise = (string: string) =>
    string[0].toUpperCase() + string.slice(1);
}
