
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Leaderboard} from '/interfaces/leaderboard.ts';
import {LeaderboardService} from '/services/leaderboard.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: '/templates/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [LeaderboardService]
})

export class AppComponent {
  public title = 'Leader Board';

  public leaderboard: Leaderboard[] = [];

  constructor(private _leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this._leaderboardService.getLeaderboards().then(leaderboard => this.leaderboard = leaderboard);
  }
}
