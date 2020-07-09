import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'legendizer-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  @Input() strikes: number;
  @Input() twists: number;
  @Input() bystanders: number;
  @Input() wounds?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
