import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  // IN tslint.json ,,,"use-host-property-decorator": false
   host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {

  name: any;
  // IN tslint ,,,,no-inferrable-types : false
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

  logout() {
     this.af.auth.signOut();
     this.router.navigateByUrl('/login');
  }




  ngOnInit() {
  }

}
