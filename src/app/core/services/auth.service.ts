import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

formatUser(user:User):User{
  return {username:user.username,email:user.email} as User;
}

checkUserAccount(mail:string,password:string,users){
  return users.find(actualUser=>actualUser.email === mail && actualUser.password === password);
}

}
