import { Component, OnInit } from '@angular/core';

import {
  GameSets,
  Henchmen,
  Heroes,
  Masterminds,
  VillainGroups,
} from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  numGameSets: number = GameSets.ALL.length;
  numHenchmen: number = Henchmen.ALL.length;
  numHeroes: number = Heroes.ALL.length;
  numMasterminds: number = Masterminds.ALL.length;
  numVillains: number = VillainGroups.ALL.length;

  constructor() {}

  ngOnInit(): void {}
}
