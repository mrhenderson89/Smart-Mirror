import { Component, OnInit, Input } from '@angular/core';
import {CardType} from '../../enums/CardType';
import {ICard} from '../../interfaces/ICard';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() card: ICard;

  // enum widget type
    CardType: typeof CardType = CardType;


  constructor() {
  }

  ngOnInit() {
  }


}