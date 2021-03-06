import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {
  // @Input() movie: Movie;
  movie;
  comment = new Comment;
  commentForm:FormGroup;

  constructor(private modalCtrl:ModalController, private formBuilder:FormBuilder, 
    private movieService:MoviesService, private toastController:ToastController) { 
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      score: ['', [Validators.required]],
      comment: [''],
      date: new Date()
    });

    this.movieService.movieSubject.subscribe(
      data => {
        // console.log(data)
        this.movie=data
      }
    )
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Votre commentaire a été ajouté.',
      duration: 2000
    });
    toast.present();
  }

  onSubmit(comment:FormGroup){
    if(comment.status ==='VALID'){
      console.log(comment);
      // this.comment = comment;
      this.movie.comments.push(comment.value);
      // console.log(this.movie.comments);
      this.movieService.movieSubject.next(this.movie);
      this.presentToast();
      // console.log(this.movie);
      this.closeModal();
    }
  }
}
