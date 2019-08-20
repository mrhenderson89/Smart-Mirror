import { ICard } from '../interfaces/ICard';

export class CardConfigurationModel {
  public name: string;
  public icon: string;
  public cards: ICard[];
  public tabIndex: number;


  constructor(name: string, icon: string, tabIndex: number) {
    this.name = name;
    this.icon = icon;
    this.cards = [];
    this.tabIndex = tabIndex;
  }

  public addCard(card: ICard) {
    this.cards.push(card);
  }
}