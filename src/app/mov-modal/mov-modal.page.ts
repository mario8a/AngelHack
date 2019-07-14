import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mov-modal',
  templateUrl: './mov-modal.page.html',
  styleUrls: ['./mov-modal.page.scss'],
})
export class MovModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir() {
    this.modalCtrl.dismiss();
  }

}
