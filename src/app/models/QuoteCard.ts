import { CardType } from '../enums/CardType';
import { ICard } from '../interfaces/ICard';
import { CardBase } from './CardBase';
import * as moment from 'moment';

export class QuoteCard extends CardBase {

    quoteText: string;

    static parser = function(data: any): QuoteCard {
        if(data.type !== 'quote') {
            throw Error('Card type is not Quote');
        }

        if(!data.name) {
            throw Error('Could not create quote card: Name is not set')
        }

        return new QuoteCard(data.name, data.sizeX, data.sizeY, data.color);
    };

    constructor(name: string, sizeX?: number, sizeY?: number, cardColor?: string) {
        super(name, '',CardType.Quote, null, null, null, sizeX, sizeY, cardColor);
        this.quoteText = 'Quote goes here';
        moment.locale('en');
    }

    update(card: ICard, data: any) {}

    updateQuote(quoteText: string) {
        console.log("Quote Updated: ");
        console.log(quoteText);
        this.quoteText = quoteText;
        this.title = quoteText;
        this.subtitle = 'Quote of the day tile';
    }
}