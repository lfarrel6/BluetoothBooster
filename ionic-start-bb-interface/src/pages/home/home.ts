import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addr: string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  submit(address){
  	this.navCtrl.setRoot('EntryPage', {booster: address});
  }

}
