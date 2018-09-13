import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { EntryPage } from './entry';

@NgModule({
  declarations: [
    EntryPage,
  ],
  imports: [
  	IonicModule,
  	CommonModule,
    IonicPageModule.forChild(EntryPage),
  ],
})
export class EntryPageModule {}
