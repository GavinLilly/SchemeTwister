import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IHenchmen } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-henchmen',
  templateUrl: './henchmen.component.html',
  styleUrls: ['./henchmen.component.scss'],
})
export class HenchmenComponent {
  @Input() henchmen!: IHenchmen;
  @Output() henchmenID = new EventEmitter<string>();
  faRedo = faRedo;

  shuffle(id: string) {
    this.henchmenID.emit(id);
  }
}
