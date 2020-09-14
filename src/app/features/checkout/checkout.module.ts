import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FeaturesModule } from '../features.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CheckoutRoutingModule,
    FeaturesModule,
    SharedModule,
  ]
})
export class CheckoutModule { }
