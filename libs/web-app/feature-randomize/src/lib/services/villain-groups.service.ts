import { Injectable } from '@angular/core';
import { BaseMultiDataService } from './base-data-service';
import { AllVillains } from '@legendizer/shared/data';
import {
  IVillainGroup,
  IScheme,
  IMastermind,
  CardType,
} from '@legendizer/shared/models';
import { Subscription } from 'rxjs';
import { SchemesService } from './schemes.service';
import { MastermindsService } from './masterminds.service';

@Injectable({
  providedIn: 'root',
})
export class VillainGroupsService extends BaseMultiDataService<IVillainGroup> {
  private scheme: IScheme;
  private mastermind: IMastermind;

  private schemeSubscription: Subscription;
  private mastermindSubscription: Subscription;

  constructor(
    private schemesService: SchemesService,
    private mastermindsService: MastermindsService
  ) {
    super(AllVillains);
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
    const numVillains = this.scheme.rules.villainDeck.numVillainGroups[
      numPlayers
    ];
    const requiredCards: IVillainGroup[] = [];
    if (
      this.scheme.requiredCards.inVillainDeck !== undefined &&
      this.scheme.requiredCards.inVillainDeck.cardType === CardType.VILLAINGROUP
    ) {
      requiredCards.push(
        this.scheme.requiredCards.inVillainDeck as IVillainGroup
      );
    } else if (this.mastermind.alwaysLeads.cardType === CardType.VILLAINGROUP) {
      requiredCards.push(this.mastermind.alwaysLeads as IVillainGroup);
    }

    super.shuffle(numVillains, requiredCards);
  }
}
