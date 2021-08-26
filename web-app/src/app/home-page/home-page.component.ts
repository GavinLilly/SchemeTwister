import { Component } from '@angular/core';

import {
  GameSets,
  Henchmen,
  Heroes,
  Masterminds,
  VillainGroups,
} from 'libtwister';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  numGameSets: number = GameSets.ALL.length;
  numHenchmen: number = Henchmen.ALL.length;
  numHeroes: number = Heroes.ALL.length;
  numMasterminds: number = Masterminds.ALL.length;
  numVillains: number = VillainGroups.ALL.length;
}
