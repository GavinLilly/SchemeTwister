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
import { NgFor } from '@angular/common';
import {
  CardType,
  INamedObject,
  IPlayableObject,
} from '@schemetwister/libtwister';

@Component({
  standalone: true,
  selector: 'schemetwister-modal-selector',
  imports: [FormsModule, NgFor, MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './modal-selector.component.html',
})
export class ModalSelectorComponent implements OnInit {
  dialogRef = inject(MatDialogRef<ModalSelectorComponent>);

  randomText = '**Random**';

  @Input() itemType!: CardType;
  @Input() availableItems!: IPlayableObject[];
  @Input() selectedItem = this.randomText;
  @Output() chosenItem = new EventEmitter<string>();

  adjustedAvailableItems: INamedObject[] = [];

  ngOnInit(): void {
    const allItems = this.availableItems.toSorted((a, b) =>
      a.name.localeCompare(b.name)
    );

    for (const [i, currentItem] of allItems.entries()) {
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
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  onSelectionChange(event: { value: string }): void {
    this.chosenItem.emit(event.value);
  }
}
