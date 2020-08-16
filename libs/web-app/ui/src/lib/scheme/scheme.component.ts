import { Component, OnInit, Input } from '@angular/core';
import { IScheme } from "@legendizer/legendizer-lib";

@Component({
  selector: 'legendizer-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {
  @Input() scheme: IScheme;

  constructor() { }

  ngOnInit(): void {
  }

}
