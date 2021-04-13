import {
  LocalStorage
} from '@ngx-pwa/local-storage';
import {
  StoreSettingsService
} from './services/store-settings.service';
import {
  SettingsService
} from './services/settings.service';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  TranslateService
} from '@ngx-translate/core';
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcStatusChangeEvent,
  NgcNoCookieLawEvent
} from 'ngx-cookieconsent';
import {
  Subscription
} from 'rxjs';

import {
  Router,
  NavigationEnd
} from '@angular/router';

declare const hideCookieConsent: any;

//declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular';

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(
    private settingsService: SettingsService,
    private storeSettingsService: StoreSettingsService,
    private ccService: NgcCookieConsentService,
    private translateService: TranslateService,
    private localStorage: LocalStorage,
    public router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        /*
        gtag('config', 'UA-4408152-44', {
          'page_path': event.urlAfterRedirects
        })
        */
      }
    })
  }

  ngOnInit() {

    // Support for translated cookies messages
    this.translateService.addLangs(['pt-br']);
    this.translateService.setDefaultLang('pt-br');

    const browserLang = this.translateService.getBrowserLang();
    //console.log('browserLang: '+browserLang)
    this.translateService.use(browserLang.match(/pt-br/) ? browserLang : 'pt-br');

    this.translateService
      .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      .subscribe(data => {

        this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        // Override default messages with the translated ones
        this.ccService.getConfig().content.header = data['cookie.header'];
        this.ccService.getConfig().content.message = data['cookie.message'];
        this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
        this.ccService.getConfig().content.allow = data['cookie.allow'];
        this.ccService.getConfig().content.deny = data['cookie.deny'];
        this.ccService.getConfig().content.link = data['cookie.link'];
        this.ccService.getConfig().content.policy = data['cookie.policy'];

        this.ccService.destroy(); // remove previous cookie bar (with default messages)

        this.localStorage.getItem('cookie_consent').subscribe(res => {
          //console.log(res)
          if (res !== '1') {
            this.ccService.init(this.ccService.getConfig()); // update config with translated messages
          }
        })
      });


    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...

      });


    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

      });


    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

      });


    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {

        this.localStorage.setItem('cookie_consent', '1').subscribe()

        // you can use this.ccService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...

        //console.log(event)
      });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

  onActivate(event) {
    this.settingsService.scrollTopSmooth()
  }
}
