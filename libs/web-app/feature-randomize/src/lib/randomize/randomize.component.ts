import { Component, OnInit } from '@angular/core';
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
import { Observable } from 'rxjs';

import {
  generateGameSetup,
  resetDefinedMastermind,
  resetDefinedScheme,
} from '../+state/actions/game-setup.actions';
import {
  setAdvancedSolo,
  setNumPlayers,
} from '../+state/actions/num-players.actions';
import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import { INumPlayersState } from '../+state/reducers/num-players.reducer';
import { selectGameSetup } from '../+state/selectors/game-setup-scheme.selectors';
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
  numPlayers$: Observable<NumPlayers> = this._store.select(selectNumPlayers);

  isAdvancedSolo$: Observable<boolean> =
    this._store.select(selectIsAdvancedSolo);

  gameSetup$: Observable<GameSetup> = this._store.select(selectGameSetup);

  faCog = faCog;

  numPlayers = numPlayers;

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

    this.gameSetup$.subscribe((setup) => {
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
    this._store.dispatch(generateGameSetup());
  }

  setPlayers(value: string) {
    const realValue = parseInt(value);
    this._store.dispatch(
      setNumPlayers({ numPlayers: realValue as NumPlayers })
    );
  }

  setAdvancedSolo(isEnabled: boolean) {
    this._store.dispatch(setAdvancedSolo({ isAdvancedSolo: isEnabled }));
  }

  pickGameSets() {
    this._modalService.open(GameSetSelectComponent);
  }

  reset() {
    this._store.dispatch(resetDefinedScheme());
    this._store.dispatch(resetDefinedMastermind());
  }
}
