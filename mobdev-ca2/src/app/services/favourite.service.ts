import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http: HttpClient) { }

  getAllFavouriteEpisodes(){
      return this.http.get('https://www.breakingbadapi.com/api/episodes')
  }

  isFavourite(episodeId) {
    return this.getAllFavouriteEpisodes().subscribe(result => {
      return result && result.isPrototypeOf(episodeId) !== -1;
    });
  }
 
  favouriteFilm(filmId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(filmId);
        return this.http.set(STORAGE_KEY, result);
      } else {
        return this.http.set(STORAGE_KEY, [filmId]);
      }
    });
  }
 
  unfavouriteFilm(filmId) {
    return this.getAllFavouriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
}
