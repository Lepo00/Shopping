import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
