import { Component, OnDestroy } from '@angular/core';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";
import { FlightEventService } from '../flight-event.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnDestroy {
  flights: Flight[] = [];
  sub: Subscription;

  constructor(flightEventService: FlightEventService) {

    this.sub = flightEventService.flightSelected.subscribe(
      (flight) => {
        this.flights.push(flight);
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
