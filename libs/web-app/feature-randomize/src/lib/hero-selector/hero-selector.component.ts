import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Hero, INamedObject } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-hero-selector',
  standalone: true,
  imports: [FormsModule, NgbModalModule],
  templateUrl: './hero-selector.component.html',
  styleUrl: './hero-selector.component.scss',
})
export class HeroSelectorComponent implements OnInit {
  @Input() availableHeroesInput!: Hero[];
  @Input() numberOfHeroes!: number;
  @Input() lockedHeroes?: Hero[];
  @Output() chosenItems = new EventEmitter<Hero[]>();

  private readonly _availableHeroes: INamedObject[] = [];

  private readonly _chosenHeroes: Map<number, Hero> = new Map();

  numHeroesArray: number[] = [];

  randomText = '**Random**';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.numHeroesArray = Array(this.numberOfHeroes)
      .fill(0)
      .map((x, i) => i);

    if (this.lockedHeroes !== undefined) {
      for (let i = 0; i < this.lockedHeroes.length; i++) {
        this._chosenHeroes.set(i, this.lockedHeroes[i]);
      }
    }

    this.availableHeroesInput
      .toSorted((a, b) => a.name.localeCompare(b.name))
      .forEach((currentHero, i, allHeroes) => {
        const isNextHeroNameMatching =
          i + 1 < allHeroes.length &&
          currentHero.name === allHeroes[i + 1].name;
        const isPreviousHeroNameMatching =
          i - 1 > 0 && currentHero.name === allHeroes[i - 1].name;

        let name: string;
        if (isNextHeroNameMatching || isPreviousHeroNameMatching) {
          name = `${currentHero.name} (${currentHero.gameSet.name})`;
        } else {
          name = currentHero.name;
        }

        this._availableHeroes.push({ name, id: currentHero.id });
      });
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
    const chosenHeroesArray = Array.from(this._chosenHeroes.values()).map(
      (hero) => hero.id
    );
    return this._availableHeroes.filter(
      (hero) =>
        hero.id === this._chosenHeroes.get(index)?.id ||
        !chosenHeroesArray.includes(hero.id)
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
    this.activeModal.close('Close click');
  }
}
