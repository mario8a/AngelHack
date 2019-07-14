import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransModalPage } from '../trans-modal/trans-modal.page';
import {MovModalPage} from '../mov-modal/mov-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slidesOpts = {
    slidesPerView: 2.7,
    freeMode: true
  };


  slides:any[] = [
    {
      title: "Juan",
      description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
      image: "assets/avatar.jpg",
    },
    {
      title: "Margarito",
      description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
      image: "assets/avatar.jpg",
    },
    {
      title: "Azael",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/avatar.jpg",
    },
    {
      title: "Jon",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/avatar.jpg",
    },
    {
      title: "Mike",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/avatar.jpg",
    },
    {
      title: "Bryan",
      description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
      image: "assets/avatar.jpg",
    }
  ];

  constructor(public modalController: ModalController) {}


  onClick() {
    console.log('Hola');
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: TransModalPage
    });
    await modal.present();
  }


  async movModal() {
    const modal = await this.modalController.create({
      component: MovModalPage
    });
    await modal.present();
  }

  

}
