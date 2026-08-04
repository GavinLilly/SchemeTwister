import { faker } from '@faker-js/faker';
import {
  Bystander,
  Henchmen,
  Hero,
  ITeam,
  Mastermind,
  MastermindWithEpic,
  SchemeDefinition,
  VillainGroup,
} from '@schemetwister/libtwister';

import {
  capitalise,
  createGamesetMeta,
  createKeywords,
  createTeam,
} from './fakerUtils';

export class FakeCardFactory {
  constructor(
    private readonly _gameSet = createGamesetMeta(),
    private readonly _availableKeywords = createKeywords(),
    seed?: number
  ) {
    faker.seed(seed);
  }

  public createHero(): Hero;
  public createHero(availableTeams: ITeam[]): Hero;
  public createHero(team: ITeam): Hero;
  public createHero(teamOrTeams?: ITeam[] | ITeam): Hero {
    let team: ITeam | undefined;

    if (teamOrTeams !== undefined && !Array.isArray(teamOrTeams)) {
      team = teamOrTeams;
    } else {
      const teams =
        teamOrTeams === undefined
          ? faker.helpers.multiple(() => createTeam())
          : teamOrTeams;

      team = faker.helpers.maybe(() => faker.helpers.arrayElement(teams), {
        probability: 0.65,
      });
    }

    return new Hero({
      id: faker.string.uuid(),
      name: this._createSuperName(),
      gameSet: this._gameSet,
      keywords: this._selectKeywords(),
      team,
    });
  }

  public readonly createHenchmen = () =>
    new Henchmen({
      id: faker.string.uuid(),
      name: 'The ' + this._createSuperName(),
      attackPoints: faker.number.int(3),
      gameSet: this._gameSet,
      victoryPoints: faker.helpers.maybe(() => faker.number.int(2), {
        probability: 0.75,
      }),
      keywords: this._selectKeywords(),
      ability: faker.helpers.maybe(() => faker.lorem.sentence()),
      ambush: faker.helpers.maybe(() => faker.lorem.sentence()),
      escape: faker.helpers.maybe(() => faker.lorem.sentence()),
      fight: faker.helpers.maybe(() => faker.lorem.sentence()),
      finishThePrey: faker.helpers.maybe(() => faker.lorem.sentence()),
    });

  public readonly createVillainGroup = () =>
    new VillainGroup({
      id: faker.string.uuid(),
      name: 'The ' + this._createSuperName(),
      gameSet: this._gameSet,
      keywords: this._selectKeywords(),
    });

  public readonly createMastermind = (alwaysLeads = this._createOnlyLeads()) =>
    new Mastermind({
      id: faker.string.uuid(),
      name: capitalise(faker.word.noun()),
      attackPoints: faker.number.int(25),
      victoryPoints: faker.number.int({ min: 5, max: 10 }),
      gameSet: this._gameSet,
      masterStrike: faker.lorem.sentence(),
      alwaysLeads,
      keywords: this._selectKeywords(),
      mastermindWins: faker.lorem.sentence(),
      specialRules: faker.lorem.sentence(),
    });

  public createEpicMastermind(
    alwaysLeads = this._createOnlyLeads()
  ): MastermindWithEpic {
    const mastermind = this.createMastermind(alwaysLeads);
    return new MastermindWithEpic(mastermind, { id: faker.string.uuid() });
  }

  public readonly createBystander = () =>
    new Bystander({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      copies: faker.number.int(30),
      gameSet: this._gameSet,
      keywords: this._selectKeywords(),
      victoryPoints: faker.helpers.maybe(() => faker.number.int(5)),
    });

  public readonly createScheme = () =>
    new SchemeDefinition({
      id: faker.string.uuid(),
      name: `${faker.word.verb()} ${faker.word.conjunction()} ${faker.word.sample()}`,
      evilWins: faker.lorem.sentence(),
      gameSet: this._gameSet,
      setup: faker.lorem.sentence(),
      twist: faker.lorem.sentences(),
      keywords: this._selectKeywords(),
      specialRules: faker.helpers.maybe(() => faker.lorem.sentence()),
      meta: { numTwists: faker.number.int(11) },
    });

  /**
   * Creates a name befitting of a superhero
   * @returns a super hero or villain name
   */
  private readonly _createSuperName = () =>
    capitalise(faker.word.adjective()) + ' ' + capitalise(faker.word.noun());

  private readonly _selectKeywords = () =>
    faker.helpers.arrayElements(this._availableKeywords, {
      min: 0,
      max: faker.number.int(),
    });

  private readonly _createOnlyLeads = () =>
    faker.helpers.multiple(
      () =>
        faker.datatype.boolean()
          ? this.createVillainGroup()
          : this.createHenchmen(),
      { count: { min: 1, max: 2 } }
    );
}
