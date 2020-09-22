import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legendizer-additional-cards',
  templateUrl: './additional-cards.component.html',
  styleUrls: ['./additional-cards.component.scss']
})
export class AdditionalCardsComponent implements OnInit {
  @Input() twists = 8;
  @Input() bystanders = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
