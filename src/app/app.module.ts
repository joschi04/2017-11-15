import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { CustomPreloadingStrategy } from './shared/preload/custom-preloading-strategy';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpModule } from '@angular/http';
import { FlightEventService } from "./flight-event.service";

export function createLoader(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, // <-- Neues Http-Modul, ab 4.3
    HttpModule, // <-- Altes HTTP-Moduls, bis Angular 4.3
    // FlightBookingModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(
      APP_ROUTES,
      {
        preloadingStrategy: CustomPreloadingStrategy
      }),
    SharedModule.forRoot(),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      }
    }),

  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    FlightEventService
    // { provide: FlightService, useClass: FlightService}
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
