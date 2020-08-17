import { Injectable } from '@angular/core';
import { BaseMultiDataService } from './base-data-service';
import { AllHeroes } from '@legendizer/shared/data';
import { IHero, IScheme, CardType } from '@legendizer/shared/models';
import { Subscription, Subject } from 'rxjs';
import { SchemesService } from './schemes.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends BaseMultiDataService<IHero> {
  private scheme: IScheme;
  private villainDeckHero: Subject<IHero>;

  private schemeSubscription: Subscription;

  constructor(private schemesService: SchemesService) {
    super(AllHeroes);
    this.schemeSubscription = this.schemesService
      .getChosen()
      .subscribe((scheme) => {
        this.scheme = scheme;
      });
  }

  public shuffle(numPlayers: number): void {
    if (
      this.scheme.requiredCards.inVillainDeck !== undefined &&
      this.scheme.requiredCards.inVillainDeck.cardType === CardType.HERO
    )
      this.villainDeckHero.next(
        this.scheme.requiredCards.inVillainDeck as IHero
      );

    const numHeroes = this.scheme.rules.heroDeck.numHeroes[numPlayers];
    super.shuffle(numHeroes, undefined, [
      this.scheme.requiredCards.inVillainDeck as IHero,
    ]);
  }
}
