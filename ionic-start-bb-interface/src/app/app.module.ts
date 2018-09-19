import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';

import { EntryPageModule } from '../pages/entry/entry.module';
import { CoapConnectionProvider } from '../providers/coap-connection/coap-connection';

@NgModule({
  declarations: [
    MyApp,
    LandingPage
  ],
  imports: [
    BrowserModule,
    EntryPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoapConnectionProvider
  ]
})
export class AppModule {}
