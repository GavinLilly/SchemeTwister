import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Henchmen } from '@legendizer/shared/henchmen/types';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'legendizer-henchmen',
  templateUrl: './henchmen.component.html',
  styleUrls: ['./henchmen.component.scss']
})
export class HenchmenComponent implements OnInit {
  @Input() henchmen: Henchmen
  @Output() henchmenID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void {
  }

  shuffle() {
    this.henchmenID.emit(this.henchmen.id);
  }

}
