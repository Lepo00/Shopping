import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/redux/user/user.actions';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  login(mail:string, pass:string){
    //console.log("ciao"+ mail+" "+pass);
    let user:User = {"username":mail,"mail":mail,"password":pass};
    this.store.dispatch(login({user}));
  }

}
