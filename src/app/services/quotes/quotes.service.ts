import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const quotesEndpoint = 'http://quotes.rest/qod.json';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

@Injectable({
    providedIn: 'root'
})
export class QuotesService {

    constructor(private http: HttpClient) {
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    getQuote(): Observable<any>{
        return this.http.get(quotesEndpoint).pipe(map(this.extractData));
    }
}