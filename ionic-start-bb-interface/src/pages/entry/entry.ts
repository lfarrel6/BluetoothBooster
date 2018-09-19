import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CoapConnectionProvider } from '../../providers/coap-connection/coap-connection';
import { LoadingController } from 'ionic-angular';
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

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams, 
  	private coapConn: CoapConnectionProvider,
  	private loadingCtrl: LoadingController) {
  	this.booster = this.navParams.get('booster');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewCanEnter(){
  	console.log('Can view enter?');
  	let spinner = this.loadingCtrl.create({
  		content: 'Searching for Server...'
  	});
  	let result = async function(){
  		spinner.present();
  		var response = await this.coapConn.pingServer(this.booster);
  		if(response)
  			return true;
  		else
  			return false;
  	}
  }

  ionViewCanLeave(){
  	/*
	Break connection to server safely before returning true
  	*/
  	return true;
  }

}
