import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { GameSetupStore } from '../game-setup-store';
import { GameSetSelectComponent } from './game-set-select.component';

jest.genMockFromModule('ngx-cookie-service');

describe('GameSetSelectComponent', () => {
  let component: GameSetSelectComponent;
  let fixture: ComponentFixture<GameSetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameSetSelectComponent],
      imports: [NgbModule, FormsModule],
      providers: [GameSetupStore, CookieService, NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
