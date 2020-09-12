import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FeaturesModule } from '../features.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    FeaturesModule
  ]
})
export class RegisterModule { }
