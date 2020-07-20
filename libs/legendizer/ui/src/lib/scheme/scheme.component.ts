import { Component, OnInit, Input } from '@angular/core';
import { IScheme } from "@legendizer/shared/scheme/types";

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
