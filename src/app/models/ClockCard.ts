import { CardType } from '../enums/CardType';
import { ICard } from '../interfaces/ICard';
import { CardBase } from './CardBase';
import * as moment from 'moment';

export class ClockCard extends CardBase {

    currentTime: Date;

    static parser = function(data: any): ClockCard {
        if(data.type !== 'clock') {
            throw Error('Card type is not Clock');
        }

        if(!data.name) {
            throw Error('Could not create clock card: Name is not set')
        }

        return new ClockCard(data.name, data.sizeX, data.sizeY, data.color);
    };

    constructor(name: string, sizeX?: number, sizeY?: number, cardColor?: string) {
        super(name, '',CardType.Clock, null, null, null, sizeX, sizeY, cardColor);
        this.currentTime = moment().toDate();
        moment.locale('en');
    }

    update(card: ICard, data: any) {}

    updateCurrentTime() {
        this.currentTime = moment().toDate();
        this.title = moment().format('LTS');
        this.subtitle = moment().format('LL');
    }
}