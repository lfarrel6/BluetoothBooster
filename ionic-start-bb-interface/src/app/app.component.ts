import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LandingPage;

  pages = [{title: 'Save Booster', icon: 'bookmark', page: 'Save'},
  {title: 'Disconnect', icon: 'exit', page: LandingPage}];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit(){
  }

  openPage(p){
    if(p==='Save')
      console.log('Save');
    else{
      console.log('Tidy up');
      this.nav.setRoot(p);
    }
  }

}

