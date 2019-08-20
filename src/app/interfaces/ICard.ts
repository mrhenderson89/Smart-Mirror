import { CardType } from '../enums/CardType';

export interface ICard {
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

    updateLastUpdatedString();

    update(card: ICard, data: any): void;

    onSelect(sender: ICard): void;

}