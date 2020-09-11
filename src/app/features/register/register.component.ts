import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Store } from '@ngrx/store';
import { signUpUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  signup(username:string,email:string,password:string){
    //let user:User = {"username":usr,"email":mail,"password":pass};
    //console.log(user);
    this.store.dispatch(signUpUser({username,password,email}));
  }
}
