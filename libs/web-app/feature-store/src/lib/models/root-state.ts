import {
  IGameSetsState,
  IGameSetupState,
  INumPlayersState,
} from '@schemetwister/web-app/feature-randomize';

export interface IRootState {
  numPlayers: INumPlayersState;
  gameSets: IGameSetsState;
  gameSetup: IGameSetupState;
}
