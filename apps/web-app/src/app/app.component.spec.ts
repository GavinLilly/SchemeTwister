import { MockBuilder, MockRender } from 'ng-mocks';

import { AppComponent } from './app.component';
import { UpdateService } from './update.service';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent).mock(UpdateService));

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    fixture.detectChanges();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
