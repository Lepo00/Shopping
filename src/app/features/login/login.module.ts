import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from '../features.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
    FeaturesModule,
  ]
})
export class LoginModule { }
