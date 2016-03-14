import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app.component.ts';
import {LeaderboardService} from './services/leaderboard.service.ts';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  LeaderboardService
]);
