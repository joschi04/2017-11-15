import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthService } from './auth/auth.service';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading-strategy';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [ /* Keine Provider hier, siehe forRoot */ ],
  exports: [
    CityPipe
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
        CustomPreloadingStrategy
      ]
    }
  }

}
