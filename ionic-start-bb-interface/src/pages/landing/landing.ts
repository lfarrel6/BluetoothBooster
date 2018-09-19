import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  addr: string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  submit(address){
  	this.navCtrl.setRoot('EntryPage', {booster: address});
  }

}
