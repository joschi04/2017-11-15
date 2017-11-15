import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanDeactivateComponent } from '../../shared/can-deactivate/can-deactivate.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {


  id: string;
  showDetails: string;
  flight: Flight;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute) { }

  sender: Observer<boolean>;
  showWarning = false;

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canDeactivate(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });

  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    });
  }

}
