import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { GameSetupStoreService } from '../game-setup-store.service';

import { GameSetSelectComponent } from './game-set-select.component';

describe('GameSetSelectComponent', () => {
  let component: GameSetSelectComponent;
  let fixture: ComponentFixture<GameSetSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSetSelectComponent],
      imports: [FormsModule, NgbModalModule],
      providers: [GameSetupStoreService, CookieService, NgbActiveModal],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
