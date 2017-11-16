import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { _do } from "rxjs/operator/do";

@Component({
    selector: 'flight-lookahead',
    templateUrl: './flight-lookahead.component.html'
})

export class FlightLookaheadComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    control: FormControl;
    flights$: Observable<Flight[]>;
    loading: boolean = false;










    ngOnInit() {
        this.control = new FormControl();

        this.flights$ = this
                            .control
                            .valueChanges
                            .pipe(
                              debounceTime(300),
                              tap(v => this.loading = true),
                              switchMap(name => this.load(name)),
                              tap(v => this.loading = false)
                            );
    }

    load(from: string)  {
        let url = "http://www.angular.at/api/flight";

        let params = new HttpParams()
                            .set('from', from);

        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, {params, headers});

    };


}
