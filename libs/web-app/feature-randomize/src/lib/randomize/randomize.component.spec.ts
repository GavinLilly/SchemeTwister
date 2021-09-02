import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { GameSetupStore } from '../game-setup-store';
import { IterateDeckComponent } from '../iterate-deck/iterate-deck.component';
import { ReplacePipe } from '../replace.pipe';
import { RandomizeComponent } from './randomize.component';

jest.genMockFromModule('ngx-cookie-service');

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RandomizeComponent, IterateDeckComponent, ReplacePipe],
        imports: [
          FormsModule,
          WebAppUiModule,
          FontAwesomeModule,
          NgbModalModule,
          NgbAccordionModule,
        ],
        providers: [GameSetupStore, CookieService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
