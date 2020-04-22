import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  /** 
   Infinite scroll code-
   Code Resource: https://www.youtube.com/watch?v=NBeExE9dvR0
   Author:Simon Grimm
  **/
//   episodeArray = [];
//   id = 0;
//   maximumid = 1000;


 constructor(private router: Router, private api: ApiService, private http: HttpClient) { }
//       //this.loadEpisodes();
//   }

//   loadEpisodes(event?){
//       this.http.get(`https://www.breakingbadapi.com/api/episodes/${this.id}`)
//       .subscribe(res =>{
//           console.log(res);
//           this.episodeArray = this.episodeArray.concat(res['episodes']);
           
//           if(event){
//               event.target.complete();
//           }


//       });

//   }

//   loadMore(event){
//       console.log(event);
//       this.id++;
//       this.loadEpisodes(event);

//       if(this.id === this.maximumid){
//           event.target.disabled = true;

//       }

//   }

  ngOnInit() {
      this.episodes = this.api.getEpisodes();
      this.episodes.subscribe(data =>{
          console.log('my data: ', data);
      });
  }

  openDetails(episode){
      let episodeId = episode.episode_id;
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }
}