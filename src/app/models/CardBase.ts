import { CardType } from '../enums/CardType';
import { ICard } from '../interfaces/ICard';
import * as moment from 'moment';

const standardCardWidth = 115;
const standardCardHeight = 115;
const cardMargin = 48;
const cardGridPadding = 16;

let currentCardId = 0;

export abstract class CardBase implements ICard {
    id: number;
    name: string;
    type: CardType;
    title: string;
    subtitle: string;
    updatedAt: Date;
    updatedAtString: string;
    sizeX: number;
    sizeY: number;
    dataPrefix: string;
    dataSuffix: string;
    cardColor: string;
    cardHeaderColor: string;
    cardWidth: number;
    cardHeight: number;

    protected constructor(
        name: string,
        title: string,
        cardType: CardType,
        subtitle?: string,
        dataPrefix?: string,
        dataSuffix?: string,
        sizeX?: number,
        sizeY?: number,
        cardColor?: string,
        cardHeaderColor?: string) {

        this.id = currentCardId;
        currentCardId++;

        this.name = name;
        this.title = title;
        this.subtitle = subtitle || '';

        this.updatedAt = moment().toDate();

        this.type = cardType;
        this.sizeX = sizeX || 1;
        this.sizeY = sizeY || 1;

        this.cardWidth = this.sizeX * standardCardWidth + cardMargin * (this.sizeX - 1) + cardGridPadding * (this.sizeX - 1);
        this.cardHeight = this.sizeY * standardCardHeight + cardMargin * (this.sizeY - 1) + cardGridPadding * (this.sizeY - 1);
        this.dataPrefix = dataPrefix || '';
        this.dataSuffix = dataSuffix || '';
        this.cardHeaderColor = cardHeaderColor;
        this.cardColor = cardColor;

        console.log('Widget ' + this.name + ' (' + this.type + ') created with ' + this.cardWidth + 'x' + this.cardHeight);

        }

        public isDefaultCardColor(element: string): boolean {
            if (element) {
              return false;
            }
            return true;
          }
        
          private getLastUpdatedString(): string {
            return moment(this.updatedAt).format('mm:ss');
          }

          updateLastUpdatedString() {
            this.updatedAt = new Date();
            this.updatedAtString = this.getLastUpdatedString();
          }

          abstract update(card: CardBase, data: any): void;

  onSelect(sender: CardBase): void {
    // if (sender.primaryAction) {
    //   sender.primaryAction.execute(sender, null);
    //}
  }

  toString(): string {
    return this.name + ' (id ' + this.id + '): ' + this.subtitle;
  }
}