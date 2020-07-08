import { Component, OnInit, Input } from '@angular/core';
import { SchemeService } from '../scheme.service';
import { Scheme } from '@legendizer/shared/scheme/types';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'legendizer-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss'],
})
export class SchemeComponent extends BaseComponent<Scheme> implements OnInit {
  constructor(private schemeService: SchemeService) {
    super(schemeService);
  }

  ngOnInit(): void {}
}
