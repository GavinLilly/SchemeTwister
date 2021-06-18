import { Component, OnInit } from '@angular/core';

import { version } from "./version";

@Component({
  selector: 'schemetwister-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
