import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardType, GameSets } from '@legendizer/legendizer-lib';

import { VillainGroupComponent } from './villain-group.component';

describe('VillainGroupComponent', () => {
  let component: VillainGroupComponent;
  let fixture: ComponentFixture<VillainGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainGroupComponent);
    component = fixture.componentInstance;
    component.villainGroup = {
      id: '1310ca31-a8d5-46dc-90f0-b3f4a83f6c6f',
      name: 'Test villains',
      cardType: CardType.VILLAINGROUP,
      gameSet: GameSets.LEGENDARY
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
