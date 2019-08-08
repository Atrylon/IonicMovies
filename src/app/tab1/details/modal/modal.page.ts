import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  srctrailer;

  constructor(private modalCtrl:ModalController, private navParams:NavParams, public sanitizer: DomSanitizer) {
   }

  ngOnInit() {
    this.srctrailer = this.navParams.get('trailer');
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
