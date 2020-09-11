import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/redux/user/user.actions';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { selectErrorMessage, selectUserState } from 'src/app/redux/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  get error(){
    return this.store.pipe(select(selectErrorMessage));
  }

  login(mail:string, pass:string){
    let user:User = {"username":mail,"email":mail,"password":pass};
    this.store.dispatch(login({user}));
  }

}
