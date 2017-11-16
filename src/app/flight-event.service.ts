import { Injectable } from '@angular/core';
import { Flight } from './entities/flight';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class FlightEventService {

  flightSelected = new ReplaySubject<Flight>(3);

}

