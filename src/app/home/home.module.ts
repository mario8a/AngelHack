import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TransModalPage} from '../trans-modal/trans-modal.page';
import {TransModalPageModule} from '../trans-modal/trans-modal.module';
import {MovModalPage} from '../mov-modal/mov-modal.page';
import {MovModalPageModule} from '../mov-modal/mov-modal.module';

import { HomePage } from './home.page';

@NgModule({
  entryComponents: [
    TransModalPage,
    MovModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransModalPageModule,
    MovModalPageModule,
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
