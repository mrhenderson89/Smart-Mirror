import { Component, OnInit, Input } from '@angular/core';
import { SportScoreCard } from '../../models/SportScoreCard';
import { SportsFixture } from '../../models/SportFixtureModel';
import { FootballTable } from '../../models/FootballTableModel';
import { SportsScoreService } from '../../services/sportsScore/sportsScore.service';

@Component({
    selector: 'app-sport-score-card',
    templateUrl: './sport-score-card.component.html',
    styleUrls: ['./sport-score-card.component.css']
})
export class SportScoreComponent implements OnInit {

    @Input() card: SportScoreCard;
    constructor(private sportScoreService: SportsScoreService) { }

    ngOnInit() {
        this.sportScoreService.getTeamInfo(this.card.teamId).subscribe(
            res => {
                let teamName = res["name"];
                let teamBadge = res["crestUrl"];
                this.card.updateTeamDetails(teamName, teamBadge);
            });

        this.sportScoreService.getFixture(this.card.teamId, 'SCHEDULED').subscribe(
            res => {
                let match = res["matches"][0];
                let homeTeam = match["homeTeam"];
                let awayTeam = match["awayTeam"];
                let fixture: SportsFixture = <SportsFixture> {
                    homeTeam: homeTeam.name,
                    homeScore: 0,
                    awayTeam: awayTeam.name,
                    awayScore: 0,
                    location: 'Unavailable',
                    competition: match["competition"].name,
                    date: match.utcDate,
                    hasPlayed: false
                }
                this.card.updateNextFixture(fixture);
            });
            this.sportScoreService.getFixture(this.card.teamId, 'FINISHED').subscribe(
                res => {
                    let match = res["matches"][0];
                    if(match)
                    {
                    let homeTeam = match["homeTeam"];
                    let awayTeam = match["awayTeam"];
                    let score = match["score"]["fullTime"];
                    let fixture: SportsFixture = <SportsFixture> {
                        homeTeam: homeTeam.name,
                        homeScore: score.homeTeam,
                        awayTeam: awayTeam.name,
                        awayScore: score.awayTeam,
                        location: 'Unavailable',
                        competition: match["competition"].name,
                        date: match.utcDate,
                        hasPlayed: true
                    }
                    this.card.updateLastFixture(fixture);
                }
                });   
                this.sportScoreService.getLeagueTable(this.card.competitionId).subscribe(
                    res => {
                        console.log("League Table: ");
                        console.dir(res); 
                        let table: FootballTable = <FootballTable> {
                            competition: res["competition"],
                            filters: res["filters"],
                            season: res["season"],
                            standings: res["standings"]
                        }
                        this.card.updateStandings(table);
                    }); 
                console.log("Card: ");
                console.dir(this.card); 
    }

    
}