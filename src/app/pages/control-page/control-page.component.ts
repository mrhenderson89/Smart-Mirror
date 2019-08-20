import { Component, OnInit, Input } from '@angular/core';
import {ICard} from '../../interfaces/ICard';
@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.css']
})
export class ControlPageComponent implements OnInit {

  @Input() pageCards: ICard[];

  constructor() {
  }

  ngOnInit() {
  }
}