import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl = 'https://www.breakingbadapi.com/api';
    

    constructor(private http: HttpClient) { }


    getEpisodes() {
        return this.http.get(`${this.baseUrl}/episodes`)
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters')
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes')
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/death-count?name=Gustavo+Fring')
    }
}
