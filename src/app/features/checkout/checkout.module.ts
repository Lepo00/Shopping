import { NgModule } from '@angular/core';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CheckoutRoutingModule,
    SharedModule,
  ]
})
export class CheckoutModule { }
