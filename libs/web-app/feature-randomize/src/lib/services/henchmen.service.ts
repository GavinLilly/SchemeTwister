import { Injectable } from '@angular/core';
import { BaseMultiDataService } from './base-data-service';
import { AllHenchmen } from '@legendizer/shared/data';
import {
  IHenchmen,
  IScheme,
  CardType,
  IMastermind,
} from '@legendizer/shared/models';
import { SchemesService } from './schemes.service';
import { Subscription } from 'rxjs';
import { MastermindsService } from './masterminds.service';

@Injectable({
  providedIn: 'root',
})
export class HenchmenService extends BaseMultiDataService<IHenchmen> {
  private scheme: IScheme;
  private mastermind: IMastermind;

  private schemeSubscription: Subscription;
  private mastermindSubscription: Subscription;

  constructor(
    private schemesService: SchemesService,
    private mastermindsService: MastermindsService
  ) {
    super(AllHenchmen);
    this.schemeSubscription = this.schemesService
      .getChosen()
      .subscribe((scheme) => {
        this.scheme = scheme;
      });
    this.mastermindSubscription = this.mastermindsService
      .getChosen()
      .subscribe((mastermind) => {
        this.mastermind = mastermind;
      });
  }

  public shuffle(numPlayers: number): void {
    const numHenchmen = this.scheme.rules.villainDeck.numHenchmenGroups[
      numPlayers
    ];
    const requiredCards: IHenchmen[] = [];
    if (
      this.scheme.requiredCards.inVillainDeck !== undefined &&
      this.scheme.requiredCards.inVillainDeck.cardType === CardType.HENCHMEN
    ) {
      requiredCards.push(this.scheme.requiredCards.inVillainDeck as IHenchmen);
    } else if (this.mastermind.alwaysLeads.cardType === CardType.HENCHMEN) {
      requiredCards.push(this.mastermind.alwaysLeads as IHenchmen);
    }

    super.shuffle(numHenchmen, requiredCards);
  }
}
