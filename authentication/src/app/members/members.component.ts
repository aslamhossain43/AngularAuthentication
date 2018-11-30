import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()]
})

export class MembersComponent implements OnInit {

  name: any;
  state: '';

  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        if (! auth.displayName) {
          this.name = auth.email;
        } else {

          this.name = auth.displayName;
        }
      }
    });

  }
// TO BIND EXPORTED ANIMATION FUNCTION
  @HostBinding('@moveIn') get moveIn() {
    return '';
  }

  logout() {
     this.af.auth.signOut();
     this.router.navigateByUrl('/login');
  }




  ngOnInit() {
  }

}
