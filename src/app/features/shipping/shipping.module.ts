import { NgModule } from '@angular/core';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { FeaturesModule } from '../features.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShippingComponent],
  imports: [
    ShippingRoutingModule,
    FeaturesModule,
    SharedModule,
  ]
})
export class ShippingModule { }
