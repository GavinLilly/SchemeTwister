import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IHenchmen } from 'libtwister';

@Component({
  selector: 'app-ui-henchmen',
  templateUrl: './ui-henchmen.component.html',
  styleUrls: ['./ui-henchmen.component.scss'],
})
export class UiHenchmenComponent {
  @Input() henchmen!: IHenchmen;
  @Output() henchmenID = new EventEmitter<string>();
  faRedo = faRedo;

  shuffle(id: string) {
    this.henchmenID.emit(id);
  }
}
