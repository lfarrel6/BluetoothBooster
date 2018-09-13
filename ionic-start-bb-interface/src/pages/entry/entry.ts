import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  booster: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.booster = this.navParams.get('booster');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
