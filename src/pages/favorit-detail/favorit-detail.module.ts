import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritDetailPage } from './favorit-detail';

@NgModule({
  declarations: [
    FavoritDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritDetailPage),
  ],
})
export class FavoritDetailPageModule {}
