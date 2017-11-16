import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';

import { AuthGuard } from '../shared/auth/auth.guard';
import { FlightResolver } from "./flight-edit/flight.resolver";
import { TranslateModule } from '@ngx-translate/core';
import { FlightSearchMultistopComponent } from './flight-search-multistop/flight-search-multistop.component';
import { FlightSearchReactiveComponent } from './flight-search-reactive/flight-search-reactive.component';
import { FlightLookaheadComponent } from './lookahead/flight-lookahead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    TranslateModule.forChild()
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent,
    FlightSearchMultistopComponent,
    FlightSearchReactiveComponent,
    FlightLookaheadComponent
],
  providers: [
    FlightResolver,
    FlightService,
    AuthGuard
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
