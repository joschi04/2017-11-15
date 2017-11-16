import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Manfred war hier!';

  showLoadingIndicator: boolean = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private oauthService: OAuthService
  ) {

    oauthService.configure(authConfig);
    oauthService.tokenValidationHandler = new JwksValidationHandler();
    oauthService.loadDiscoveryDocumentAndTryLogin();

    router.events
          .filter( e => e instanceof NavigationStart)
          .subscribe(event => {
      this.showLoadingIndicator = true;
    });

    router.events
      .filter( e => e instanceof NavigationEnd
                || e instanceof  NavigationError
                || e instanceof NavigationCancel
     )
      .subscribe(event => {
        this.showLoadingIndicator = false;
      });
  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }


}

