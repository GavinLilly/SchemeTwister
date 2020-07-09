import { Component, OnInit, Input } from '@angular/core';
import { Henchmen } from '@legendizer/shared/henchmen/types';

@Component({
  selector: 'legendizer-henchmen',
  templateUrl: './henchmen.component.html',
  styleUrls: ['./henchmen.component.scss']
})
export class HenchmenComponent implements OnInit {
  @Input() henchmen: Henchmen

  constructor() { }

  ngOnInit(): void {
  }

}
