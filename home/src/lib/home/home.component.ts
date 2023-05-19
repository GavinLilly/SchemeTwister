import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Mastermind,
  IHenchmen,
  IHero,
  IVillainGroup,
  LibTwister,
  SchemeMinusRules,
} from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
      .filter((masterminds): masterminds is Mastermind[] => !!masterminds)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numVillains = allGameSets
      .map((gameSet) => gameSet.villains)
      .filter((villains): villains is IVillainGroup[] => !!villains)
      .reduce((prev, next) => prev?.concat(next)).length;

    this.numSchemes = allGameSets
      .map((gameSet) => gameSet.schemes)
      .filter((schemes): schemes is SchemeMinusRules[] => !!schemes)
      .reduce((prev, next) => prev?.concat(next)).length;
  }
}
