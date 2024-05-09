import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CardType, IPlayableObject } from '@schemetwister/libtwister';

import { SortByNamePipe } from '../SortByName.pipe';

@Component({
  selector: 'schemetwister-modal-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModalModule, SortByNamePipe],
  templateUrl: './modal-selector.component.html',
})
export class ModalSelectorComponent {
  @Input() itemType!: CardType;
  @Input() availableItems!: IPlayableObject[];
  @Input() selectedItem = '**Random**';
  @Output() chosenItem = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal) {}
}
