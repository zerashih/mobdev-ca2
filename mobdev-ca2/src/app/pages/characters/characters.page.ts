import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    characters: Observable<any>;

    scrollChar = [];
    offset = 0;
   

    constructor(private router: Router, private api: ApiService, private http: HttpClient) { 
     this.loadCharacters();
    }

    loadCharacters(){
        this.http.get(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${this.offset}`)
        .subscribe(res => {
            console.log(res);
            this.scrollChar = this.scrollChar.concat(['limit']);
        })
    }



    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my characters: ', data);
        });
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}
