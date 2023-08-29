import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  Mastermind,
  Henchmen,
  Hero,
  LibTwister,
  SchemeMinusRules,
  VillainGroup,
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

  constructor(meta: Meta) {
    const allGameSets = LibTwister.allGameSets.asArray();
    this.numHenchmen = allGameSets
      .map((gameSet) => gameSet.henchmen)
      .filter((henchmen): henchmen is Henchmen[] => !!henchmen)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numHeroes = allGameSets
      .map((gameSet) => gameSet.heroes)
      .filter((heroes): heroes is Hero[] => !!heroes)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numMasterminds = allGameSets
      .map((gameSet) => gameSet.masterminds)
      .filter((masterminds): masterminds is Mastermind[] => !!masterminds)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numVillains = allGameSets
      .map((gameSet) => gameSet.villains)
      .filter((villains): villains is VillainGroup[] => !!villains)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numSchemes = allGameSets
      .map((gameSet) => gameSet.schemes)
      .filter((schemes): schemes is SchemeMinusRules[] => !!schemes)
      .reduce((prev, next) => prev?.concat(next)).length;

    meta.updateTag({
      name: 'description',
      content:
        'Schemetwister is an app for generating random Legendary: Marvel setups',
    });
  }
}
