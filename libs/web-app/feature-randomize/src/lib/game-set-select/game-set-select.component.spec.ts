import { CookieService } from 'ngx-cookie-service';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { GameSetupStore } from '../game-setup-store';

import { GameSetSelectComponent } from './game-set-select.component';

jest.genMockFromModule('ngx-cookie-service');

describe('GameSetSelectComponent', () => {
  let component: GameSetSelectComponent;
  let fixture: ComponentFixture<GameSetSelectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GameSetSelectComponent],
        imports: [NgbModalModule, FormsModule],
        providers: [GameSetupStore, CookieService, NgbActiveModal],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
