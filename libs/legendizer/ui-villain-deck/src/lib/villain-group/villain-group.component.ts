import { Component, OnInit, Input } from '@angular/core';
import { VillainGroup } from '@legendizer/shared/villainGroup/types';

@Component({
  selector: 'legendizer-villain-group',
  templateUrl: './villain-group.component.html',
  styleUrls: ['./villain-group.component.scss']
})
export class VillainGroupComponent implements OnInit {
  @Input() villainGroup: VillainGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
