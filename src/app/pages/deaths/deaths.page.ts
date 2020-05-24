import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    query: String;
    

    constructor(private router: Router, private api: ApiService) { 

        this.query = '';
    }

    searach(event){
        let val = event.target.value;
        if(val && val.trim() != ''){
            return this.openDetails;

        }

    }



    // serach(event){
    //     console.log(event);
    // }


    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my deaths: ', data);
        });
    }

    openDetails(death) {
        let deathId = death.death;
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }

    

}
