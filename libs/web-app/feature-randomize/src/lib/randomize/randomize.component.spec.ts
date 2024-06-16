import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAccordionModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { GameSetup } from '@schemetwister/libtwister';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { ReplacePipe } from '../replace.pipe';

import { RandomizeComponent } from './randomize.component';

describe('RandomizeComponent', () => {
  let component: RandomizeComponent;
  let fixture: ComponentFixture<RandomizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RandomizeComponent, ReplacePipe],
      imports: [
        FormsModule,
        WebAppUiModule,
        FontAwesomeModule,
        NgbModalModule,
        NgbAccordionModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            gameSetup: {
              gameSetup: GameSetup.empty(),
            },
            numPlayers: 2,
          },
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
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

  it("should show that the screen wake lock isn't on by default", () =>
    expect(component.isScreenLocked()).toEqual(false));

  it('should toggle the screen wake lock', async () => {
    await component.toggleScreenLock();
    expect(component.screenLockSentinel).toBeDefined();
    expect(component.screenLockSentinel?.type).toEqual('screen');
    expect(component.screenLockSentinel?.released).toBe(false);
    expect(component.isScreenLocked()).toEqual(true);

    await component.toggleScreenLock();
    expect(component.screenLockSentinel).toBeDefined();
    expect(component.screenLockSentinel?.type).toEqual('screen');
    expect(component.screenLockSentinel?.released).toBe(true);
    expect(component.isScreenLocked()).toEqual(false);
  });
});
