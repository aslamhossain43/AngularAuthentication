import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyBJ7BUJ1O0xNUD2_-gsXsgQZBn433P0efM',
        authDomain: 'o2-auth-fb-service-demo.firebaseapp.com',
        databaseURL: 'https://o2-auth-fb-service-demo.firebaseio.com',
        projectId: 'o2-auth-fb-service-demo',
        storageBucket: 'o2-auth-fb-service-demo.appspot.com',
        messagingSenderId: '425204054081'
};




@ NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

