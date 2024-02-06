import { Component, Input, OnInit } from '@angular/core';
import { Hero, LibTwister } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-hero-card-content',
  templateUrl: './hero-card-content.component.html',
  styleUrls: ['./hero-card-content.component.scss'],
})
export class HeroCardContentComponent implements OnInit {
  @Input() hero!: Hero;
  gameSetName!: string;

  ngOnInit(): void {
    this.gameSetName =
      LibTwister.allGameSets.get(this.hero.gameSet.id)?.name ?? '';
  }
}
