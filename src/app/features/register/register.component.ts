import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Store } from '@ngrx/store';
import { signup } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  signup(usr:string,mail:string,pass:string){
    let user:User = {"username":usr,"mail":mail,"password":pass};
    console.log(user);
    this.store.dispatch(signup({user}));
  }
}
