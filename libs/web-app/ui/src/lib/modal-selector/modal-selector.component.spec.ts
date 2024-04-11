import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
