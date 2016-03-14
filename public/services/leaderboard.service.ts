import {Injectable} from 'angular2/core';
import {LEADERBOARDS} from '/mocks/mock-leaderboard.ts';

@Injectable()
export class LeaderboardService {
  getLeaderboards() {
    return Promise.resolve(LEADERBOARDS);
  }

	getLeaderboard(id: number) {
    return Promise.resolve(LEADERBOARDS).then(
      leaderboards => leaderboards.filter(leaderboard => leaderboard.id === id)[0]
    );
  }
}
