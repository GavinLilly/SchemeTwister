import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { GameSetupStoreService } from '../game-setup-store.service';
import { IterateDeckComponent } from '../iterate-deck/iterate-deck.component';
import { ReplacePipe } from '../replace.pipe';

import { RandomizeComponent } from './randomize.component';

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomizeComponent, IterateDeckComponent, ReplacePipe],
      imports: [
        FormsModule,
        FontAwesomeModule,
        NgbModalModule,
        NgbAccordionModule,
      ],
      providers: [GameSetupStoreService, CookieService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
