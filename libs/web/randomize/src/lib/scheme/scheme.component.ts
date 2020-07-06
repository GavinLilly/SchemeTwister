import { Component, OnInit, Input } from '@angular/core';
import { IScheme } from "@legendizer/api-interfaces";
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'legendizer-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {
  scheme: IScheme;

  constructor(private schemeService: ApiServiceService) { }

  ngOnInit(): void {
    this.schemeService.getData().subscribe((data: IScheme) => this.scheme = {
      name: data['name'],
      id: data['id'],
      evilWins: data['evilWins'],
      gameSetID: data['gameSetID'],
      setup: data['setup'],
      twist: data['twist'],
      specialRules: data['specialRules']
    })
  }
}
