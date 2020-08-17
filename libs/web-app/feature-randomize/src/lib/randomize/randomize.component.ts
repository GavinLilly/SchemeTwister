import { Component, OnInit } from '@angular/core';
import { GameSetupStore } from '../game-setup-store';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameSetSelectComponent } from '../game-set-select/game-set-select.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  private COOKIE_NAME = 'NumberPlayers';
  numPlayers: number;
  faCog = faCog;

  constructor(
    public gameSetupStore: GameSetupStore,
    private modalService: NgbModal,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.numPlayers = this.cookieService.check(this.COOKIE_NAME)
      ? parseInt(this.cookieService.get(this.COOKIE_NAME), 10)
      : 2;
    this.setPlayers();
    this.generateDecks();
  }

  generateDecks() {
    this.gameSetupStore.shuffle();
  }

  setPlayers() {
    this.cookieService.set(this.COOKIE_NAME, this.numPlayers.toString());
    this.gameSetupStore.setNumPlayers(this.numPlayers);
  }

  pickGameSets() {
    const modalRef = this.modalService.open(GameSetSelectComponent);
  }
}
