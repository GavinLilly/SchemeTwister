import { Component, Input } from '@angular/core';
import { VillainGroup } from '@schemetwister/libtwister';

@Component({
  selector: 'schemetwister-villaingroup-card-content',
  templateUrl: './villaingroup-card-content.component.html',
})
export class VillaingroupCardContentComponent {
  @Input() villaingroup!: VillainGroup;
}
