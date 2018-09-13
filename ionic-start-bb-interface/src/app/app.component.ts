import { Component } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChildren(Nav) nav: QueryList<Nav>;
  rootPage:any = HomePage;

  pages = [{title: 'Save Booster', icon: 'bookmark', func: function(){
    console.log('save');
  }},
  {title: 'Disconnect', icon: 'exit', func: this.disconnect}];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit(){
    this.nav.changes.subscribe(navigators => {
      console.log(JSON.stringify(navigators));
    });
  }

  disconnect(){
    
  }

}

