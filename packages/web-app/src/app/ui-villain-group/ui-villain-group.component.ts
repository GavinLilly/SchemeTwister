import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IVillainGroup } from 'libtwister';

@Component({
  selector: 'app-ui-villain-group',
  templateUrl: './ui-villain-group.component.html',
  styleUrls: ['./ui-villain-group.component.scss'],
})
export class UiVillainGroupComponent {
  @Input() villainGroup!: IVillainGroup;
  @Output() villainID = new EventEmitter<string>();
  faRedo = faRedo;

  shuffle() {
    this.villainID.emit(this.villainGroup.id);
  }
}
