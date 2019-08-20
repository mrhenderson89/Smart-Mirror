import { Component, OnInit, Input } from '@angular/core';
import { QuotesService } from '../../services/quotes/quotes.service';
import { QuoteCard } from '../../models/QuoteCard';

@Component({
    selector: 'app-quote-card',
    templateUrl: './quote-card.component.html',
    styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

    quotetext: string = '';

    @Input() card: QuoteCard;
    constructor(private quoteService: QuotesService) { }

    ngOnInit() {
        //var quoteText = this.quoteService.getQuote();
        this.quoteService.getQuote().subscribe(
            res => {
                let contents = res["contents"];
                let quotes = contents["quotes"];
                let quote = quotes[0];
                console.log("Quote: ");
                console.log(quote["quote"]);
                this.quotetext = quote["quote"];
                //this.card.updateQuote(this.quotetext);
            });

          //this.card.updateQuote(this.quotetext);
        }
    }