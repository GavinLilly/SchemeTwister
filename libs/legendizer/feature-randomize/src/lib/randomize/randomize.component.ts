import { Component, OnInit, ViewChild } from '@angular/core';
import { SchemeService } from '../services/scheme.service';
import { Scheme } from '@legendizer/shared/scheme/types';
import { Mastermind } from '@legendizer/shared/mastermind/types';
import { MastermindService } from '../services/mastermind.service';
import { VillainGroupsService } from '../services/villain-groups.service';
import { VillainGroup } from '@legendizer/shared/villainGroup/types';

@Component({
  selector: 'legendizer-randomize',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.scss'],
})
export class RandomizeComponent implements OnInit {
  numPlayers = 2;
  scheme: Scheme;
  mastermind: Mastermind;
  strikes: number;
  twists: number;
  bystanders: number;
  wounds?: number;
  villains: VillainGroup[];

  constructor(
    private schemeService: SchemeService,
    private mastermindService: MastermindService,
    private villainGroupService: VillainGroupsService
  ) {}

  ngOnInit(): void {
    this.randomize();
  }

  randomize() {
    this.schemeService
      .getRandom(1)
      .subscribe((record) => (this.scheme = record[0]));

    this.strikes = this.scheme.rules.numMasterStrikes[this.numPlayers];
    this.twists = this.scheme.rules.numTwists[this.numPlayers];
    this.bystanders = this.scheme.rules.numBystanders[this.numPlayers];
    if (this.scheme.rules.numWounds)
      this.wounds = this.scheme.rules.numWounds[this.numPlayers];

    this.mastermindService
      .getRandom(1)
      .subscribe((record) => (this.mastermind = record[0]));

    this.villainGroupService
      .getRandom(this.scheme.rules.numVillains[this.numPlayers])
      .subscribe((record) => (this.villains = record));
  }
}
