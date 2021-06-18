import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IVillainGroup } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-villain-group',
  templateUrl: './villain-group.component.html',
  styleUrls: ['./villain-group.component.scss'],
})
export class VillainGroupComponent implements OnInit {
  @Input() villainGroup!: IVillainGroup;
  @Output() villainID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() {}

  ngOnInit(): void {}

  shuffle() {
    this.villainID.emit(this.villainGroup.id);
  }
}
