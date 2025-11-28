import { Component, Input } from '@angular/core';
import { VillainGroup } from '@schemetwister/libtwister';

import { BaseCardContentComponent } from '../base-card-content/base-card-content.component';

@Component({
    selector: 'schemetwister-villaingroup-card-content',
    templateUrl: './villaingroup-card-content.component.html',
    imports: [BaseCardContentComponent]
})
export class VillaingroupCardContentComponent {
  @Input() villaingroup!: VillainGroup;
}
