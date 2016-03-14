import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app.component.ts';
import {LeaderboardService} from './services/leaderboard.service.ts';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import {enableProdMode} from 'angular2/core';

enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  LeaderboardService,
  HTTP_PROVIDERS]
]);
