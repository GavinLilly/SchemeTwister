import { Component, OnInit, Input } from '@angular/core';
import { SchemeModel } from "@legendizer/shared/scheme/types";

@Component({
  selector: 'legendizer-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {
  @Input() scheme: SchemeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
