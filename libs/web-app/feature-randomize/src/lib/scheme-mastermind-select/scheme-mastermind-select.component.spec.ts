import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { CardType, GameSets, LibTwister } from '@schemetwister/libtwister';
import { CookieService } from 'ngx-cookie-service';

import { SchemeMastermindSelectComponent } from './scheme-mastermind-select.component';

describe('SchemeMastermindSelectComponent', () => {
  let component: SchemeMastermindSelectComponent;
  const initialState = { numPlayers: 2 };
  let fixture: ComponentFixture<SchemeMastermindSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemeMastermindSelectComponent],
      imports: [NgbModalModule, FormsModule],
      providers: [
        CookieService,
        NgbActiveModal,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeMastermindSelectComponent);
    component = fixture.componentInstance;
    component.itemType = CardType.MASTERMIND;
    component.libTwister = new LibTwister([GameSets.LEGENDARY.default.id]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
