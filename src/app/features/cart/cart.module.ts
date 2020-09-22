import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CartRoutingModule,
    SharedModule,
  ]
})
export class CartModule { }
