import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Description } from './description';

@NgModule({
  declarations: [
    Description,
  ],
  imports: [
    IonicPageModule.forChild(Description),
  ],
  exports: [
    Description
  ]
})
export class DescriptionModule {}
