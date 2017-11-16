import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FlightService } from '../flight-search/flight.service';

@Component({
    selector: 'flight-search-reactive',
    templateUrl: 'flight-search-reactive.component.html',
    providers: [FlightService],
    styleUrls: ['flight-search-reactive.component.css']
})
export class FlightSearchReactiveComponent {

    public selectedFlight: Flight;
    public filter: FormGroup;

    constructor(private flightService: FlightService,
                private fb: FormBuilder) {

        this.filter = fb.group({
            'from': [
                'Graz',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]
            ],
            'to': ['Hamburg']
        });

    }


    public get flights(): Array<Flight> {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        const value = this.filter.value;

        this.flightService
            .load(value.from, value.to);


    }
}
