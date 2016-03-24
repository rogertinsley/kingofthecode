import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Leaderboard} from '/interfaces/leaderboard.ts';
import {LeaderboardService} from '/services/leaderboard.service.ts';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'my-app',
  templateUrl: '/templates/app.component.html',
  stylesUrl : ['/styles/app.component.css']
  directives: [ROUTER_DIRECTIVES],
  providers: [LeaderboardService, HTTP_PROVIDERS]
})

export class AppComponent {
  public title = 'Leader Board';

  public leaderboard: Leaderboard[] = [];

  constructor(private _leaderboardService: LeaderboardService) { }

  ngOnInit() {
       this._leaderboardService.getLeaderboards().subscribe(leaderboard => this.leaderboard = leaderboard);
  }

}
