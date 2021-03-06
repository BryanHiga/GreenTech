import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SensoresProvider } from '../providers/sensores/sensores';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { InformationPage } from '../pages/information/information';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ChartPage } from '../pages/chart/chart';
import { TablePage } from '../pages/table/table';




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InformationPage,
    RegisterPage,
    LoginPage,
    ResetPasswordPage,
    ChartPage,
    TablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InformationPage,
    RegisterPage,
    LoginPage,
    ResetPasswordPage,
    ChartPage,
    TablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SensoresProvider
  ]
})
export class AppModule {}
