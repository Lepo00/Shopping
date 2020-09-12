import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/redux/user/user.actions';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';
import { selectErrorMessage, selectUserState } from 'src/app/redux/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private store:Store, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get error(){
    return this.store.pipe(select(selectErrorMessage));
  }

  login(){
    this.store.dispatch(login({user:this.loginForm.value}));
  }

}
