import { Component, OnInit } from '@angular/core';
import { GameSets, IGameSet } from '@legendizer/legendizer-lib';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GameSetupStore } from '../game-setup-store';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'legendizer-game-set-select',
  templateUrl: './game-set-select.component.html',
  styleUrls: ['./game-set-select.component.scss'],
})
export class GameSetSelectComponent implements OnInit {
  private COOKIE_NAME = 'SelectedGameSets';
  selectedGameSets: IGameSet[];
  gameSets: IGameSet[] = GameSets.ALL;

  constructor(
    public gameSetupStore: GameSetupStore,
    public activeModal: NgbActiveModal,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.selectedGameSets = this.cookieService.check(this.COOKIE_NAME)
      ? this.cookieToArray(this.cookieService.get(this.COOKIE_NAME))
      : GameSets.ALL

    this.setGameSets();
  }

  private cookieToArray(idString: string): IGameSet[] {
    const idArray: string[] = idString.split('|');
    return GameSets.ALL.filter((item) => idArray.includes(item.id))
  }

  setGameSets() {
    console.log(this.selectedGameSets.map((item) => item.id))
    this.cookieService.set(this.COOKIE_NAME, this.selectedGameSets.map((item) => item.id).join('|'));
    this.gameSetupStore.setGameSets(this.selectedGameSets);
  }
}
