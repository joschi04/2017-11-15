import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Manfred war hier!';

  showLoadingIndicator: boolean = false;

  constructor(private router: Router) {

    router.events
          .filter( e => e instanceof NavigationStart)
          .subscribe(event => {
      this.showLoadingIndicator = true;
    });


    router.events
      .filter( e => e instanceof NavigationEnd
                || e instanceof  NavigationError
                || e instanceof NavigationCancel)
      .subscribe(event => {
        this.showLoadingIndicator = false;
      });


  }

}

