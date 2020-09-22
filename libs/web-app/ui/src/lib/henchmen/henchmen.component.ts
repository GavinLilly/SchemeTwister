import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import { IHenchmen } from '@legendizer/legendizer-lib';

@Component({
  selector: 'legendizer-henchmen',
  templateUrl: './henchmen.component.html',
  styleUrls: ['./henchmen.component.scss']
})
export class HenchmenComponent implements OnInit {
  @Input() henchmen!: IHenchmen;
  @Output() henchmenID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void {
  }

  shuffle(id: string) {
    this.henchmenID.emit(id);
  }

}
