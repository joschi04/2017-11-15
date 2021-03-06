import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthService } from './auth/auth.service';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading-strategy';
import { ClickWithWarningDirective } from './warning/flight-click-with-warning.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TabComponent } from './controls/tab/tab.component';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    ClickWithWarningDirective,
    TabComponent,
    TabbedPaneComponent
  ],
  providers: [ /* Keine Provider hier, siehe forRoot */ ],
  exports: [
    CityPipe,
    ClickWithWarningDirective,
    TabComponent,
    TabbedPaneComponent
  ]
})
export class SharedModule {

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        CanDeactivateGuard,
        CustomPreloadingStrategy,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }
      ]
    }
  }

}
