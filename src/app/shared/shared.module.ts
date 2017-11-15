import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthService } from './auth/auth.service';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [
    AuthService,
    CanDeactivateGuard
  ],
  exports: [
    CityPipe
  ]
})
export class SharedModule { }
