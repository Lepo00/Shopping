import { NgModule } from '@angular/core';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './customize.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CustomizeRoutingModule,
    SharedModule
  ]
})
export class CustomizeModule { }
