import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'legendizer-additional-cards',
  templateUrl: './additional-cards.component.html',
  styleUrls: ['./additional-cards.component.scss']
})
export class AdditionalCardsComponent implements OnInit {
  @Input() twists: number;
  @Input() bystanders: number;

  constructor() { }

  ngOnInit(): void {
  }

}
