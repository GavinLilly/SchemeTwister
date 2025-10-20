import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {
  CardType,
  INamedObject,
  IPlayableObject,
} from '@schemetwister/libtwister';

@Component({
    selector: 'schemetwister-modal-selector',
    imports: [FormsModule, NgbModalModule],
    templateUrl: './modal-selector.component.html'
})
export class ModalSelectorComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  randomText = '**Random**';

  @Input() itemType!: CardType;
  @Input() availableItems!: IPlayableObject[];
  @Input() selectedItem = this.randomText;
  @Output() chosenItem = new EventEmitter<string>();

  adjustedAvailableItems: INamedObject[] = [];

  ngOnInit(): void {
    this.availableItems
      .toSorted((a, b) => a.name.localeCompare(b.name))
      .forEach((currentItem, i, allItems) => {
        const isNextItemNameMatching =
          i + 1 < allItems.length && currentItem.name === allItems[i + 1].name;
        const isPreviousItemNameMatching =
          i - 1 > 0 && currentItem.name === allItems[i - 1].name;

        let name: string;
        if (isNextItemNameMatching || isPreviousItemNameMatching) {
          name = `${currentItem.name} (${currentItem.gameSet.name})`;
        } else {
          name = currentItem.name;
        }

        this.adjustedAvailableItems.push({ name, id: currentItem.id });
      });
  }
}
