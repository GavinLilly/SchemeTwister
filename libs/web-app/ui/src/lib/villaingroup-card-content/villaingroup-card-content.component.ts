import { Component, Input } from '@angular/core';
import { VillainGroup } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-villaingroup-card-content',
  templateUrl: './villaingroup-card-content.component.html',
  styleUrls: ['./villaingroup-card-content.component.scss'],
})
export class VillaingroupCardContentComponent {
  @Input() villaingroup!: VillainGroup;
}
