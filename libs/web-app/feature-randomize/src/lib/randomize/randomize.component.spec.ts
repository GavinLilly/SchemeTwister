import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { ReplacePipe } from '../replace.pipe';

import { RandomizeComponent } from './randomize.component';

jest.genMockFromModule('ngx-cookie-service');

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  const initialState = { gameSetup: GameSetup.empty() };
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RandomizeComponent, ReplacePipe],
        imports: [
          FormsModule,
          WebAppUiModule,
          FontAwesomeModule,
          NgbModalModule,
          NgbAccordionModule,
        ],
        providers: [provideMockStore({ initialState })],
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
