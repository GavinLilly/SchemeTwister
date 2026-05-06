import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CARD_TYPE, LibTwister } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/series-marvel';

import { SortByNamePipe } from '../SortByName.pipe';

import { ModalSelectorComponent } from './modal-selector.component';

describe('ModalSelectorComponent', () => {
  let component: ModalSelectorComponent;
  let fixture: ComponentFixture<ModalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSelectorComponent, NgbModule, SortByNamePipe],
      providers: [NgbActiveModal, NgbModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSelectorComponent);
    component = fixture.componentInstance;
    component.itemType = CARD_TYPE.mastermind;
    component.availableItems = new LibTwister({
      series: [marvelSeries],
    }).stores.mastermindStore.availableCards;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
