import { Component, Signal, inject } from '@angular/core';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { IAdditionalDeck } from '@schemetwister/libtwister';

import { IGameSetupState } from '../+state/reducers/game-setup.reducer';
import {
  selectAdditionalDecks,
  selectLockedAdditionalDeckCards,
} from '../+state/selectors/game-setup-scheme.selectors';
import { BLANK_IMAGE_BASE64 } from '../constants';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';
import { HenchmenCardContentComponent } from '../../../../ui/src/lib/henchmen-card-content/henchmen-card-content.component';
import { VillaingroupCardContentComponent } from '../../../../ui/src/lib/villaingroup-card-content/villaingroup-card-content.component';
import { HeroCardContentComponent } from '../../../../ui/src/lib/hero-card-content/hero-card-content.component';
import { MastermindCardContentComponent } from '../../../../ui/src/lib/mastermind-card-content/mastermind-card-content.component';

@Component({
    selector: 'schemetwister-additional-deck',
    templateUrl: './additional-deck.component.html',
    styleUrls: ['./additional-deck.component.scss'],
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, HenchmenCardContentComponent, VillaingroupCardContentComponent, HeroCardContentComponent, MastermindCardContentComponent]
})
export class AdditionalDeckComponent {
  private readonly _store = inject<Store<{
    gameSetup: IGameSetupState;
}>>(Store);

  additionalDecks: Signal<IAdditionalDeck[]> = this._store.selectSignal(
    selectAdditionalDecks
  );
  lockedCards = this._store.selectSignal(selectLockedAdditionalDeckCards);

  faLock = faLock;
  faLockOpen = faLockOpen;
  blankImage = BLANK_IMAGE_BASE64;
}
