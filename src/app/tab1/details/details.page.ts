import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  movie;

  constructor(private movieService:MoviesService, private location:Location, public sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this.movieService.movieSubject.subscribe(
      data => {
        console.log(data)
        this.movie=data
      }
    )
  }


  goBack() {
    this.location.back();
  }
}
