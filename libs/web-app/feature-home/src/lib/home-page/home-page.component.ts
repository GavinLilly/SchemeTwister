import { Component } from '@angular/core';
import {
  AbstractMastermind,
  AbstractScheme,
  IHenchmen,
  IHero,
  IVillainGroup,
  LibTwister,
} from '@schemetwister/libtwister';

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
  numSchemes: number;

  constructor() {
    const allGameSets = LibTwister.allGameSets.asArray();
    this.numHenchmen = allGameSets
      .map((gameSet) => gameSet.henchmen)
      .filter((henchmen): henchmen is IHenchmen[] => !!henchmen)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numHeroes = allGameSets
      .map((gameSet) => gameSet.heroes)
      .filter((heroes): heroes is IHero[] => !!heroes)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numMasterminds = allGameSets
      .map((gameSet) => gameSet.masterminds)
      .filter(
        (masterminds): masterminds is AbstractMastermind[] => !!masterminds
      )
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numVillains = allGameSets
      .map((gameSet) => gameSet.villains)
      .filter((villains): villains is IVillainGroup[] => !!villains)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numSchemes = allGameSets
      .map((gameSet) => gameSet.schemes)
      .filter((schemes): schemes is AbstractScheme[] => !!schemes)
      .reduce((prev, next) => prev?.concat(next)).length;
  }
}
