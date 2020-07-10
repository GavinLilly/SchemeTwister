import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

// Types
import { Scheme } from '@legendizer/shared/scheme/types';
import { Mastermind } from '@legendizer/shared/mastermind/types';
import { VillainGroup } from '@legendizer/shared/villainGroup/types';
import { Henchmen } from '@legendizer/shared/henchmen/types';
import { Hero } from '@legendizer/shared/hero/types';
import { Base } from "@legendizer/shared/base/types";

// Services
import { MastermindsService } from '../services/masterminds.service';
import { VillainGroupsService } from '../services/villain-groups.service';
import { HenchmenService } from '../services/henchmen.service';
import { SchemesService } from '../services/schemes.service';
import { HeroesService } from '../services/heroes.service';

import { CardType } from '../card-type.enum';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;

  // Available records
  availableSchemes: Scheme[];
  availableMasterminds: Mastermind[];
  availableVillainGroups: VillainGroup[];
  availableHenchmen: Henchmen[];
  availableHeroes: Hero[];

  // Chose records
  scheme: Scheme;
  mastermind: Mastermind;
  strikes: number;
  twists: number;
  bystanders: number;
  villains: VillainGroup[] = [];
  henchmen: Henchmen[] = [];
  heroes: Hero[] = [];

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

  private isHenchmen(object: VillainGroup | Henchmen): object is Henchmen {
    return (<Henchmen>object).fight !== undefined;
  }

  generateHenchmen(starterDeck: Henchmen[] = []): void {
    if (starterDeck.length === 0) {
      // Check scheme for required henchmen
      if (this.scheme.requiredVillains) {
        if (this.isHenchmen(this.scheme.requiredVillains))
          starterDeck.push(this.scheme.requiredVillains);
      }

      // Check mastermind for required henchmen
      if (this.isHenchmen(this.mastermind.alwaysLeads))
        starterDeck.push(this.mastermind.alwaysLeads);
    }

    // Find out how many henchmen still need to be generated
    const remainingHenchmenCount =
      this.scheme.rules.numHenchmen[this.numPlayers] - starterDeck.length;

    // Add remaining henchmen
    this.henchmen = this.getRandom(
      remainingHenchmenCount,
      this.availableHenchmen,
      starterDeck
    );
  }

  generateHeroes(starterDeck: Hero[] = []): void {
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

  generateVillainGroups(starterDeck: VillainGroup[] = []): void {
    if (starterDeck.length === 0) {
      // Check scheme for required villains
      if (this.scheme.requiredVillains) {
        if (!this.isHenchmen(this.scheme.requiredVillains))
          starterDeck.push(this.scheme.requiredVillains);
      }

      // Check mastermind for required villains
      if (!this.isHenchmen(this.mastermind.alwaysLeads))
        starterDeck.push(this.mastermind.alwaysLeads);
    }

    // Find out how many henchmen still need to be generated
    const remainingVillainCount =
      this.scheme.rules.numVillains[this.numPlayers] - starterDeck.length;

    // Add remaining henchmen
    this.villains = this.getRandom(
      remainingVillainCount,
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
  getRandom<T extends Base>(count: number, records: T[], elements: T[] = []): T[] {
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
