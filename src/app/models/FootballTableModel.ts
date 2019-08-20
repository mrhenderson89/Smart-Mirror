    export interface Filters {
    }

    export interface Area {
        id: number;
        name: string;
    }

    export interface Competition {
        id: number;
        area: Area;
        name: string;
        code: string;
        plan: string;
        lastUpdated: Date;
    }

    export interface Season {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
        availableStages: string[];
    }

    export interface Team {
        id: number;
        name: string;
        crestUrl: string;
    }

    export interface Table {
        position: number;
        team: Team;
        playedGames: number;
        won: number;
        draw: number;
        lost: number;
        points: number;
        goalsFor: number;
        goalsAgainst: number;
        goalDifference: number;
    }

    export interface Standing {
        stage: string;
        type: string;
        group?: any;
        table: Table[];
    }

    export interface FootballTable {
        filters: Filters;
        competition: Competition;
        season: Season;
        standings: Standing[];
    }

