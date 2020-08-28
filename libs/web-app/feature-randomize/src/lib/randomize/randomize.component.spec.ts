import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { WebAppUiModule } from "@legendizer/web-app/ui";

import { GameSetupStore } from '../game-setup-store';
import { RandomizeComponent } from './randomize.component';

jest.genMockFromModule('ngx-cookie-service');

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomizeComponent],
      imports: [NgbModule, FontAwesomeModule, FormsModule, WebAppUiModule],
      providers: [NgbModal, GameSetupStore, CookieService, ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
