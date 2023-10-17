import { SwUpdate } from '@angular/service-worker';
import { MockBuilder, MockRender } from 'ng-mocks';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { UpdateService } from './update.service';

describe('AppComponent', () => {
  beforeEach(() =>
    MockBuilder(AppComponent, AppModule).keep(UpdateService).mock(SwUpdate)
  );

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    fixture.detectChanges();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
