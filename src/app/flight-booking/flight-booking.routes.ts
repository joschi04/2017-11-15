import { FlightBookingComponent } from './flight-booking.component';
import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { CanDeactivateGuard } from '../shared/can-deactivate/can-deactivate.guard';
import { FlightResolver } from './flight-edit/flight.resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          flight: FlightResolver
        }
      }
    ]
  }

]
