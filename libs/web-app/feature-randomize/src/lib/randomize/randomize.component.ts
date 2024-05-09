import { Component, OnInit, Signal, effect } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  AbstractCardGroup,
  GameSetup,
  NumPlayers,
  numPlayers,
} from '@schemetwister/libtwister';

import { randomizePageActions } from '../+state/actions/game-setup.actions';
import { numPlayersActions } from '../+state/actions/num-players.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { INumPlayersState } from '../+state/reducers/num-players.reducer';
import {
  selectGameSetup,
  selectIsVillainDeckLocked,
} from '../+state/selectors/game-setup-scheme.selectors';
import {
  selectIsAdvancedSolo,
  selectNumPlayers,
} from '../+state/selectors/num-players.selectors';
import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';

@Component({
  selector: 'schemetwister-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numberOfPlayers: Signal<NumPlayers> =
    this._store.selectSignal(selectNumPlayers);

  isAdvancedSolo: Signal<boolean> =
    this._store.selectSignal(selectIsAdvancedSolo);

  isVillainDeckLocked = this._store.select(selectIsVillainDeckLocked);

  gameSetup: Signal<GameSetup> = this._store.selectSignal(selectGameSetup);

  faCog = faCog;

  numPlayerOptions = numPlayers;

  constructor(
    private _modalService: NgbModal,
    private _store: Store<{
      numPlayers: INumPlayersState;
      gameSetup: IGameSetupState;
    }>,
    meta: Meta
  ) {
    const deckAsNameString = (cards: Set<AbstractCardGroup>) =>
      Array.from(cards)
        .map((card) => card.name)
        .join(', ');

    effect(() => {
      const setup = this.gameSetup();
      meta.updateTag({
        name: 'description',
        content:
          `Scheme: ${setup.scheme}; ` +
          `Mastermind: ${setup.mastermind}; ` +
          `Number of players: ${setup.numPlayers}; ` +
          `Hero deck: ${deckAsNameString(setup.heroDeckAsArray())}; ` +
          `Villain deck: ${deckAsNameString(setup.villainDeckAsArray())}`,
      });
    });
  }

  ngOnInit(): void {
    this.generateDecks();
  }

  generateDecks() {
    this._store.dispatch(randomizePageActions.generateGameSetup());
  }

  setPlayers(value: string) {
    const realValue = parseInt(value);
    this._store.dispatch(
      numPlayersActions.setNumberOfPlayers({
        numPlayers: realValue as NumPlayers,
      })
    );
  }

  setAdvancedSolo(isEnabled: boolean) {
    this._store.dispatch(
      numPlayersActions.setAdvancedSolo({ isAdvancedSolo: isEnabled })
    );
  }

  pickGameSets() {
    this._modalService.open(GameSetSelectComponent);
  }

  reset() {
    this._store.dispatch(randomizePageActions.resetAll());
  }
}
