import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const teamInfoEndpoint = `http://api.football-data.org/v2/teams/`;
//const teamMatchEndpoint = `https://api.football-data.org/v2/teams/${teamId}/matches?status=${status}&limit=1`
        const httpOptions = {
            headers: new HttpHeaders({
                'X-Auth-Token': 'XXXXXXXXXXXXXXXXXXXXXXX'
            })
        };

@Injectable({
    providedIn: 'root'
})
export class SportsScoreService {

    constructor(private http: HttpClient) {
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    getTeamInfo(teamId: number): Observable<any>{
        console.log("teamId: ");
                console.dir(teamId);
        return this.http.get(`http://api.football-data.org/v2/teams/${teamId}`, httpOptions).pipe(map(this.extractData));
    }

    getFixture(teamId: number, status: string): Observable<any>{
        return this.http.get(`https://api.football-data.org/v2/teams/${teamId}/matches?status=${status}&limit=1`, httpOptions).pipe(map(this.extractData));
    }

    getLeagueTable(competitionId: number): Observable<any>{
        return this.http.get(`https://api.football-data.org/v2/competitions/${competitionId}/standings`, httpOptions).pipe(map(this.extractData));
    }
}
