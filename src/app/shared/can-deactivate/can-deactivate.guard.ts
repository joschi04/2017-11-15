import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FlightEditComponent } from '../../flight-booking/flight-edit/flight-edit.component';

export interface CanDeactivateComponent {
  canDeactivate(): Observable<boolean>;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(
    component: CanDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> {

    return component.canDeactivate();

  }

}
