import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { Store } from '@ngrx/store';
import { signUpUser } from 'src/app/redux/user/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private store:Store, private fb:FormBuilder) {
    this.registerForm = this.fb.group({
      username:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {
  }
  signup(){
    //let user:User = {"username":usr,"email":mail,"password":pass};
    //console.log(user);
    this.store.dispatch(signUpUser({this.registerForm.value}));
  }
}
