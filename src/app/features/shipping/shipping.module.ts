import { NgModule } from '@angular/core';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShippingComponent],
  imports: [
    ShippingRoutingModule,
    SharedModule,
  ]
})
export class ShippingModule { }
