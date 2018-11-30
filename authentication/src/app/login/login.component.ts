import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import { auth as authen } from 'firebase';
@ Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()]
})
export class LoginComponent implements OnInit {

  error: any;
    constructor(public af: AngularFireAuth, private router: Router) {

      this.af.authState.subscribe(auth => {
        if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

// TO BIND EXPORTED ANIMATION FUNCTION
@HostBinding('@moveIn') get moveIn() {
    return '';
  }

  loginFb() {
    this.af.auth.signInWithPopup(new authen.FacebookAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new authen.GoogleAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  ngOnInit() {
  }

}
