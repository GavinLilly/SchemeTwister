import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import {
  GameSet,
  Henchmen,
  Hero,
  INamedObject,
  Mastermind,
  SchemeMinusRules,
  SeriesMeta,
  VillainGroup,
} from '@schemetwister/libtwister';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';

@Component({
  selector: 'schemetwister-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  numSeries: number;
  numGameSets: number;
  numHenchmen: number;
  numHeroes: number;
  numMasterminds: number;
  numVillains: number;
  numSchemes: number;

  constructor() {
    const meta = inject(Meta);
    const seriesRegister = inject(SERIES_REGISTER_TOKEN);

    const allGameSets = seriesRegister.flatMap((series) => series.gameSets);

    this.numSeries = HomePageComponent._getSeries(allGameSets).size;
    this.numGameSets = allGameSets.length;
    this.numHenchmen = HomePageComponent._mapReduce(
      allGameSets
        .map((gameSet) => gameSet.henchmen)
        .filter((henchmen): henchmen is Henchmen[] => !!henchmen)
    );

    this.numHeroes = HomePageComponent._mapReduce(
      allGameSets
        .map((gameSet) => gameSet.heroes)
        .filter((heroes): heroes is Hero[] => !!heroes)
    );

    this.numMasterminds = HomePageComponent._mapReduce(
      allGameSets
        .map((gameSet) => gameSet.masterminds)
        .filter((masterminds): masterminds is Mastermind[] => !!masterminds)
    );

    this.numVillains = HomePageComponent._mapReduce(
      allGameSets
        .map((gameSet) => gameSet.villains)
        .filter((villains): villains is VillainGroup[] => !!villains)
    );

    this.numSchemes = HomePageComponent._mapReduce(
      allGameSets
        .map((gameSet) => gameSet.schemes)
        .filter((schemes): schemes is SchemeMinusRules[] => !!schemes)
    );

    meta.updateTag({
      name: 'description',
      content:
        'Schemetwister is an app for generating random Legendary: Marvel setups',
    });
  }

  private static readonly _mapReduce = <T extends INamedObject>(
    gameSetCards: T[][]
  ) =>
    gameSetCards
      .map((cards) => cards.length)
      .reduce((prev, curr) => prev + curr, 0);

  private static _getSeries(gamesets: GameSet[]): Set<SeriesMeta> {
    const allSeries = gamesets.map((gameSet) => gameSet.series);
    return new Set(allSeries);
  }
}
