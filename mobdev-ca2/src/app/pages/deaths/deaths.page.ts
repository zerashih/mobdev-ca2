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

    constructor(private router: Router, private api: ApiService) { }

    //  onSearchChange(event){
    //      let value = event.detail.value;

    //      if(value == '' ){
    //          return;
    //      }
         

    //  }


    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my deaths: ', data);
        });
    }

    openDetails(death) {
        let deathId = death.season & death.cause & death.death;
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }

}
