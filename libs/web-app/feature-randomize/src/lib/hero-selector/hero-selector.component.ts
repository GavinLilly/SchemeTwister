import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { Hero, INamedObject } from '@schemetwister/libtwister';

@Component({
  standalone: true,
  selector: 'schemetwister-hero-selector',
  imports: [FormsModule, NgIf, NgFor, MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.scss'],
})
export class HeroSelectorComponent implements OnInit {
  dialogRef = inject(MatDialogRef<HeroSelectorComponent>);

  @Input() availableHeroesInput!: Hero[];
  @Input() numberOfHeroes!: number;
  @Input() lockedHeroes?: Hero[];
  @Output() chosenItems = new EventEmitter<Hero[]>();

  private readonly _availableHeroes: INamedObject[] = [];

  private readonly _chosenHeroes: Map<number, Hero> = new Map();

  numHeroesArray: number[] = [];

  randomText = '**Random**';

  selectedHeroIds: string[] = [];

  ngOnInit(): void {
    this.numHeroesArray = new Array(this.numberOfHeroes)
      .fill(0)
      .map((x, i) => i);

    if (this.lockedHeroes !== undefined) {
      for (let i = 0; i < this.lockedHeroes.length; i++) {
        this._chosenHeroes.set(i, this.lockedHeroes[i]);
        this.selectedHeroIds[i] = this.lockedHeroes[i].id;
      }
    }

    const allHeroes = this.availableHeroesInput.toSorted((a, b) =>
      a.name.localeCompare(b.name)
    );

    for (const [i, currentHero] of allHeroes.entries()) {
      const isNextHeroNameMatching =
        i + 1 < allHeroes.length && currentHero.name === allHeroes[i + 1].name;
      const isPreviousHeroNameMatching =
        i - 1 > 0 && currentHero.name === allHeroes[i - 1].name;

      let name: string;
      if (isNextHeroNameMatching || isPreviousHeroNameMatching) {
        name = `${currentHero.name} (${currentHero.gameSet.name})`;
      } else {
        name = currentHero.name;
      }

      this._availableHeroes.push({ name, id: currentHero.id });
    }
  }

  /**
   * Gets the ID of the hero associated with the provided index from the list of
   * already chosen heroes
   * @param index the index of the selected hero to get
   * @returns the ID of the selected hero
   */
  getSelected(index: number): string {
    return this._chosenHeroes.get(index)?.id ?? this.randomText;
  }

  /**
   * Gets all the available heroes for the select box, including the selected
   * hero for this index, excluding heroes picked in the other select boxes
   * @param index the index of the select box
   * @returns all applicable heroes for the select box
   */
  getAvailableHeroes(index: number): INamedObject[] {
    const chosenHeroesArray = new Set(
      Array.from(this._chosenHeroes.values()).map((hero) => hero.id)
    );
    return this._availableHeroes.filter(
      (hero) =>
        hero.id === this._chosenHeroes.get(index)?.id ||
        !chosenHeroesArray.has(hero.id)
    );
  }

  /**
   * Puts the provided hero ID into the list of chosen heroes at the given ID
   * @param index the index to put the selected hero into
   * @param heroId the ID of the selected hero
   */
  setChosenHero(index: number, heroId: string) {
    if (heroId === this.randomText) {
      this._chosenHeroes.delete(index);
    } else {
      const heroItem = this.availableHeroesInput.find(
        (heroCard) => heroCard.id === heroId
      );
      if (heroItem !== undefined) {
        this._chosenHeroes.set(index, heroItem);
        this.selectedHeroIds[index] = heroId;
      }
    }
  }

  /**
   * Returns true if the index is larger than the list of selected heroes. This
   * should disable the drop down boxes when the list of selected heroes is full
   * or if other heroes have not yet been selected
   * @param index the index to check
   * @returns a boolean
   */
  isDisabled(index: number): boolean {
    return index > this._chosenHeroes.size;
  }

  emitHeroes() {
    this.chosenItems.emit(Array.from(this._chosenHeroes.values()));
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }
}
