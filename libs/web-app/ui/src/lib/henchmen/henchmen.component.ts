import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHenchmen } from '@legendizer/legendizer-lib';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'legendizer-henchmen',
  templateUrl: './henchmen.component.html',
  styleUrls: ['./henchmen.component.scss']
})
export class HenchmenComponent implements OnInit {
  @Input() henchmen: IHenchmen;
  @Output() henchmenID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void {
  }

  shuffle(id: string) {
    this.henchmenID.emit(id);
  }

}
