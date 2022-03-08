import { Component } from '@angular/core';
import { LibTwister } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  numGameSets: number = LibTwister.allGameSets.size;
  numHenchmen: number;
  numHeroes: number;
  numMasterminds: number;
  numVillains: number;

  constructor() {
    const allGameSets = Array.from(LibTwister.allGameSets.values());
    this.numHenchmen = allGameSets.map((gameSet) => gameSet.henchmen).length;
    this.numHeroes = allGameSets.map((gameSet) => gameSet.heroes).length;
    this.numMasterminds = allGameSets.map(
      (gameSet) => gameSet.masterminds
    ).length;
    this.numVillains = allGameSets.map((gameSet) => gameSet.villains).length;
  }
}
