import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {UsersPage} from '../pages/users/users';
import {NgoPage} from '../pages/ngo/ngo';
import {userSignupPage} from '../pages/users/userSignup/userSignup';
import {ngoSignupPage} from '../pages/ngo/ngoSignup/ngoSignup';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpClientModule } from '@angular/common/http';
import {ngoAuthService} from '../services/ngoAuthService';
import {AuthInterceptor} from '../services/requestHeader.service';
import {userAuthService} from "../services/userAuthService";
import {ngoDashboard} from "../pages/ngo/dashboard/ngoDashboard";
import {userDashboard} from '../pages/users/dashboard/userDashboard'
 import {ResendMail} from '../pages/ngo/resendMail/resendMail'


@NgModule({

  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    NgoPage,
    userSignupPage,
    ngoSignupPage,
    ngoDashboard,
    userDashboard,
    ResendMail
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    NgoPage,
    ngoSignupPage,
    userSignupPage,
    ngoDashboard,
    userDashboard,
    ResendMail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ngoAuthService,
    userAuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true}
  ]

})
export class AppModule {}
