import {Injectable} from 'angular2/core';
import {LEADERBOARDS} from '/mocks/mock-leaderboard.ts';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Leaderboard} from '/interfaces/leaderboard.ts';

@Injectable()
export class LeaderboardService {
 constructor (private http: Http) {}

 private _leaderboardUrl = '/points';

  getLeaderboards() {
    return this.http.get(this._leaderboardUrl)
                .map((response: Response) => <Leaderboard[]>response.json())
                .catch(this.handleError);
  }

  getMockLeaderboards() {
    return Promise.resolve(LEADERBOARDS);
  }
}
