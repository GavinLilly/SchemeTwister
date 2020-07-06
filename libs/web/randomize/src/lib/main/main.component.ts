import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'legendizer-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getSetup(): void {
    console.log("SETUP!!!!")
  }

}
