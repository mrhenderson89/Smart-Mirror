import { Component, OnInit, Input } from '@angular/core';
import { ClockCard } from '../../models/ClockCard';

@Component({
    selector: 'app-clock-card',
    templateUrl: './clock-card.component.html',
    styleUrls: ['./clock-card.component.css']
})
export class ClockCardComponent implements OnInit {

    @Input() card: ClockCard;
    constructor() { }

    ngOnInit() {
        //update clock every second
        setInterval(() => {
            this.card.updateCurrentTime();
        }, 1000);
        }
    }