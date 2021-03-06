import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { AddCommentPage } from './add-comment/add-comment.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  movie;
  info=true;

  constructor(private movieService:MoviesService, private location:Location,
    public modalController:ModalController) { 
  }

  ngOnInit() {
    this.movieService.movieSubject.subscribe(
      data => {
        // console.log(data)
        this.movie=data
      }
    )
  }

  async showTrailer() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps:{
        'trailer': this.movie.traileryt
      }
    });
    return await modal.present();
  }

  async addComment() {
    const modal = await this.modalController.create({
      component: AddCommentPage
    });
    return await modal.present();
  }

  segmentChanged(ev: any) {
    if(ev.detail.value==="info"){
      this.info=true
    }
    if(ev.detail.value==="avis"){
      this.info=false
    }
  }

  goBack() {
    this.location.back();
  }
}
