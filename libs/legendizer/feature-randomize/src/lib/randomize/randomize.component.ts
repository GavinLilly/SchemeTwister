import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SchemeService } from '../services/scheme.service';

// Types
import { Scheme } from '@legendizer/shared/scheme/types';
import { Mastermind } from '@legendizer/shared/mastermind/types';
import { VillainGroup } from '@legendizer/shared/villainGroup/types';
import { Henchmen } from '@legendizer/shared/henchmen/types';
import { Hero } from '@legendizer/shared/hero/types';

// Services
import { MastermindService } from '../services/mastermind.service';
import { VillainGroupsService } from '../services/villain-groups.service';
import { HenchmenService } from '../services/henchmen.service';

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

  scheme: Scheme;
  mastermind: Mastermind;
  strikes: number;
  twists: number;
  bystanders: number;
  villains: VillainGroup[] = [];
  henchmen: Henchmen[] = [];

  constructor(
    private schemeService: SchemeService,
    private mastermindService: MastermindService,
    private villainGroupService: VillainGroupsService,
    private henchmenService: HenchmenService
  ) {}

  ngOnInit(): void {
    this.availableSchemes = this.schemeService.get();
    this.availableMasterminds = this.mastermindService.get();
    this.availableVillainGroups = this.villainGroupService.get();
    this.availableHenchmen = this.henchmenService.get();
    //this.hero.get().subscribe((records) => this.availableSchemes = records);

    this.generateDecks();
  }

  private isHenchmen(
    object: VillainGroup | Henchmen
  ): object is Henchmen {
    return (<Henchmen>object).fight !== undefined;
  }

  generateDecks(): void {
    // Clear existing villain and henchmen arrays
    this.villains = [];
    this.henchmen = [];

    // Get scheme
    this.scheme = this.getRandom(1, this.availableSchemes)[0];

    // Get Mastermind
    this.mastermind = this.getRandom(1, this.availableMasterminds)[0];

    // Generate villain deck

    // Add setup cards
    this.strikes = this.scheme.rules.numMasterStrikes[this.numPlayers];
    this.twists = this.scheme.rules.numTwists[this.numPlayers];
    this.bystanders = this.scheme.rules.numBystanders[this.numPlayers];

    // Check scheme for required villains/henchmen
    if (this.scheme.requiredVillains) {
      if (this.isHenchmen(this.scheme.requiredVillains)) {
        this.henchmen.push(this.scheme.requiredVillains);
      } else {
        this.villains.push(this.scheme.requiredVillains);
      }
    }

    // Check mastermind for required villains/henchment
    if (this.isHenchmen(this.mastermind.alwaysLeads)) {
      this.henchmen.push(this.mastermind.alwaysLeads);
    } else {
      this.villains.push(this.mastermind.alwaysLeads);
    }

    // Find out how many villains still need to be generated
    const remainingVillainCount =
      this.scheme.rules.numVillains[this.numPlayers] - this.villains.length;

    // Add remaining villains
    this.villains = this.getRandom(
      remainingVillainCount,
      this.availableVillainGroups,
      this.villains
    );

    // Find out how many henchmen still need to be generated
    const remainingHenchmenCount =
      this.scheme.rules.numHenchmen[this.numPlayers] - this.henchmen.length;

    // Add remaining henchmen
    this.henchmen = this.getRandom(
      remainingHenchmenCount,
      this.availableHenchmen,
      this.henchmen
    );
  }

  getRandom<T>(count: number, records: T[], elements: T[] = []): T[] {
    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    return getRandomElement([...records]);
  }
}
