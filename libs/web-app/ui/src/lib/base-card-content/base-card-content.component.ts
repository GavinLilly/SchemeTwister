import { Component, Input, OnInit } from '@angular/core';
import { IPlayableObject, LibTwister } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-base-card-content',
  templateUrl: './base-card-content.component.html',
  styleUrls: ['./base-card-content.component.scss'],
})
export class BaseCardContentComponent<T extends IPlayableObject>
  implements OnInit
{
  @Input() card!: T;
  gameSetName!: string;

  ngOnInit(): void {
    this.gameSetName =
      LibTwister.allGameSets.get(this.card.gameSet.id)?.name || '';
  }
}
