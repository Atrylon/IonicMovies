import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie, Comment } from '../models/movie.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  movies:Array<Movie> = [];
  moviesfound:Array<Movie> = [];

  constructor(private moviesService:MoviesService, private nav:NavController) {}

  ngOnInit(){
    this.movies = this.moviesService.getAllMovies()
    // console.log(this.movies); 
    this.moviesfound = this.movies;
  }

  filterMovies(event){
    let search = [];
    this.movies.forEach(movie => {
      if(movie.title.toLowerCase().includes(event.target.value.toLowerCase())){
        search.push(movie);
      }
      movie.genre.forEach(genre => {
        if(genre.toLowerCase().includes(event.target.value.toLowerCase()) && !search.includes(movie)){
          search.push(movie);
        }
      });
      movie.actors.forEach(actor => {
        if(actor.toLowerCase().includes(event.target.value.toLowerCase()) && !search.includes(movie)){
          search.push(movie);
        }
      });
    });
    this.moviesfound = search;
  }

  showDetailsAction(movie){
    this.moviesService.movieSubject.next(movie);
    // console.log(movie);
    // this.router.navigateByUrl('/details');
    this.nav.navigateForward('/details');
  }

}
