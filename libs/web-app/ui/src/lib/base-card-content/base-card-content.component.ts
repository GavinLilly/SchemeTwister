import { Component, Input, OnInit } from '@angular/core';
import { ICard, LibTwister } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-base-card-content',
  templateUrl: './base-card-content.component.html',
  styleUrls: ['./base-card-content.component.scss'],
})
export class BaseCardContentComponent<T extends ICard> implements OnInit {
  @Input() card!: T;
  gameSetName!: string;

  ngOnInit(): void {
    this.gameSetName =
      LibTwister.allGameSets.get(this.card.gameSetId)?.name || '';
  }
}
