import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
<<<<<<< HEAD
    character: any;
    characterId = null;
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        })
    }
=======
  character: any;
  characterId = null;
  LikeValue: number=0;
  DislikeValue: number=0;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}
  
  handleLike(){
      this.LikeValue++;
  }

  handlDislike(){
      this.DislikeValue++;
  }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];
    })
  }
>>>>>>> f066d25248f1df0746ac2d36d2f7c23c8e093ac4
}
