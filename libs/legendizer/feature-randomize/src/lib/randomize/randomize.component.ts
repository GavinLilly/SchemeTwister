import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

// Types
import { IScheme } from '@legendizer/shared/scheme/types';
import { IMastermind } from '@legendizer/shared/mastermind/types';
import { IVillainGroup } from '@legendizer/shared/villainGroup/types';
import { IHenchmen } from '@legendizer/shared/henchmen/types';
import { IHero } from '@legendizer/shared/hero/types';
import { IBase } from "@legendizer/shared/base/types";

// Services
import { MastermindsService } from '../services/masterminds.service';
import { VillainGroupsService } from '../services/villain-groups.service';
import { HenchmenService } from '../services/henchmen.service';
import { SchemesService } from '../services/schemes.service';
import { HeroesService } from '../services/heroes.service';

import { CardType } from "@legendizer/shared/base/types";

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;

  // Available records
  availableSchemes: IScheme[];
  availableMasterminds: IMastermind[];
  availableVillainGroups: IVillainGroup[];
  availableHenchmen: IHenchmen[];
  availableHeroes: IHero[];

  // Chosen records
  scheme: IScheme;
  mastermind: IMastermind;
  strikes: number;
  twists: number;
  bystanders: number;
  villains: IVillainGroup[] = [];
  henchmen: IHenchmen[] = [];
  heroes: IHero[] = [];

  constructor(
    private schemesService: SchemesService,
    private mastermindsService: MastermindsService,
    private villainGroupsService: VillainGroupsService,
    private henchmenService: HenchmenService,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.availableSchemes = this.schemesService.get();
    this.availableMasterminds = this.mastermindsService.get();
    this.availableVillainGroups = this.villainGroupsService.get();
    this.availableHenchmen = this.henchmenService.get();
    this.availableHeroes = this.heroesService.get();

    this.generateDecks();
  }

  onShuffleItem(id: string, cardType: string): void {
    switch (cardType) {
      case CardType.HENCHMEN:
        this.generateHenchmen(
          this.henchmen.filter((record) => record.id !== id)
        );
        break;
      case CardType.HERO:
        const tmpHeroes = this.heroes.filter((record) => record.id !== id);
        this.generateHeroes(tmpHeroes);
        break;
      case CardType.VILLAINGROUP:
        this.generateVillainGroups(
          this.villains.filter((record) => record.id !== id)
        );
        break;
      default:
        console.warn(
          'Tried shuffling a card type that isn\'t accepted. Use the "Re-shuffle" button instead'
        );
        break;
    }
  }

  generateHenchmen(starterDeck: IHenchmen[] = []): void {
    if (starterDeck.length === 0) {
      // Check scheme for required henchmen
      if (this.scheme.requiredVillains !== undefined &&
        this.scheme.requiredVillains.cardType === CardType.HENCHMEN) {
        starterDeck.push(this.scheme.requiredVillains as IHenchmen);
      }

      // Check mastermind for required henchmen
      if (this.mastermind.alwaysLeads.cardType === CardType.HENCHMEN)
        starterDeck.push(this.mastermind.alwaysLeads as IHenchmen);
    }

    // Add remaining henchmen
    this.henchmen = this.getRandom(
      this.scheme.rules.numHenchmen[this.numPlayers],
      this.availableHenchmen,
      starterDeck
    );
  }

  generateHeroes(starterDeck: IHero[] = []): void {
    // Find out how many heroes still need to be generated
    const remainingHeroes =
      this.scheme.rules.numHeroes[this.numPlayers] - starterDeck.length;

    // Generate heroes
    this.heroes = this.getRandom(
      this.scheme.rules.numHeroes[this.numPlayers],
      this.availableHeroes,
      starterDeck
    );
  }

  generateMastermind(): void {
    // Get Mastermind
    this.mastermind = this.getRandom(1, this.availableMasterminds)[0];
  }

  generateScheme(): void {
    // Get scheme
    this.scheme = this.getRandom(1, this.availableSchemes)[0];

    // Add setup cards
    this.strikes = this.scheme.rules.numMasterStrikes[this.numPlayers];
    this.twists = this.scheme.rules.numTwists[this.numPlayers];
    this.bystanders = this.scheme.rules.numBystanders[this.numPlayers];
  }

  generateVillainGroups(starterDeck: IVillainGroup[] = []): void {
    if (starterDeck.length === 0) {
      // Check scheme for required villains
      if (this.scheme.requiredVillains !== undefined &&
        this.scheme.requiredVillains.cardType === CardType.VILLAINGROUP) {
        starterDeck.push(this.scheme.requiredVillains as IVillainGroup);
      }

      // Check mastermind for required villains
      if (this.mastermind.alwaysLeads.cardType === CardType.VILLAINGROUP)
        starterDeck.push(this.mastermind.alwaysLeads as IVillainGroup);
    }

    // Add remaining henchmen
    this.villains = this.getRandom(
      this.scheme.rules.numVillains[this.numPlayers],
      this.availableVillainGroups,
      starterDeck
    );
  }

  generateDecks(): void {
    this.generateScheme();
    this.generateMastermind();
    this.generateVillainGroups();
    this.generateHenchmen();
    this.generateHeroes();
  }

  /**
   * getRandom will recursively pick a number of records based on the passed in count and return an array of the picked records
   * @param count The number of records required
   * @param records An array of records to select from
   * @param elements An optional array of records to include in the returned records. This ensures that the same entry isn't chosen twice
   */
  getRandom<T extends IBase>(count: number, records: T[], elements: T[] = []): T[] {
    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    if (elements.length > 0)
      return getRandomElement(records.filter((record) => !elements.includes(record)));
    else
      return getRandomElement([...records]);
  }
}
