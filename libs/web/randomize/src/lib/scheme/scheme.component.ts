import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'legendizer-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  constructor(private schemeService: ApiServiceService) { }

  ngOnInit(): void {}
}
