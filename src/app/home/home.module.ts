import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TransModalPage} from '../trans-modal/trans-modal.page';
import {TransModalPageModule} from '../trans-modal/trans-modal.module'

import { HomePage } from './home.page';

@NgModule({
  entryComponents: [
    TransModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransModalPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
