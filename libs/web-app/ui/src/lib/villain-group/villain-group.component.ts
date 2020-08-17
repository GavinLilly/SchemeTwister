import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IVillainGroup } from '@legendizer/legendizer-lib';
import { faRedo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'legendizer-villain-group',
  templateUrl: './villain-group.component.html',
  styleUrls: ['./villain-group.component.scss']
})
export class VillainGroupComponent implements OnInit {
  @Input() villainGroup: IVillainGroup;
  @Output() villainID = new EventEmitter<string>();
  faRedo = faRedo;

  constructor() { }

  ngOnInit(): void {
  }

  shuffle() {
    this.villainID.emit(this.villainGroup.id);
  }
}