import { CardType } from '../enums/CardType';
import { ICard } from '../interfaces/ICard';
import { CardBase } from './CardBase';
import * as moment from 'moment';
import { SportsFixture } from './SportFixtureModel';
import { FootballTable } from './FootballTableModel';

export class SportScoreCard extends CardBase {

    teamId: number;
    competitionId: number;
    teamName: String;
    teamBadgeUrl: String;
    lastFixture: SportsFixture;
    nextFixture: SportsFixture;
    standings: FootballTable;


    static parser = function(data: any): SportScoreCard {
        if(data.type !== 'sportsScore') {
            throw Error('Card type is not SportScore');
        }

        if(!data.name) {
            throw Error('Could not create sport score card: Name is not set')
        }

        return new SportScoreCard(data.name, data.sizeX, data.sizeY, data.color);
    };

    constructor(name: string, sizeX?: number, sizeY?: number, cardColor?: string) {
        super(name, '',CardType.SportScore, null, null, null, sizeX, sizeY, cardColor);
        this.teamId = 65;
        this.competitionId = 2021;
        this.lastFixture = <SportsFixture> {
            homeTeam: '',
            homeScore: 0,
            awayTeam: '',
            awayScore: 0,
            location: 'Unavailable',
            competition: 'Unavailable',
            date: null,
            hasPlayed: false
        }
        this.nextFixture = <SportsFixture> {
            homeTeam: '',
            homeScore: 0,
            awayTeam: '',
            awayScore: 0,
            location: 'Unavailable',
            competition: 'Unavailable',
            date: null,
            hasPlayed: false
        }
        moment.locale('en');
    }

    update(card: ICard, data: any) {}

    updateTeamDetails(teamName: String, teamBadgeUrl: String) {
        this.teamName = teamName;
        this.teamBadgeUrl = teamBadgeUrl;
    }

    updateLastFixture(fixture: SportsFixture) {
        this.lastFixture = fixture;
    }

    updateNextFixture(fixture: SportsFixture) {
        this.nextFixture = fixture;
    }

    updateStandings(table: FootballTable) {
        this.standings = table;
    }

    getTeamTableIndex(){

        let standings = this.standings.standings.find(x => x.type === "TOTAL");
        return standings.table.indexOf(standings.table.find(x => x.team.id === this.teamId));
      }
}