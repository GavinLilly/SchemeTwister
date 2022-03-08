import { Component, Input } from '@angular/core';
import { IHeroDeck } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.scss'],
})
export class HeroDeckComponent {
  @Input() heroDeck!: IHeroDeck;

  public isBystanders(): boolean {
    return this.heroDeck.numBystanders !== undefined;
  }
}
