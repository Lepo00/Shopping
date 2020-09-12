import { NgModule } from '@angular/core';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './customize.component';
import { FeaturesModule } from '../features.module';


@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CustomizeRoutingModule,
    FeaturesModule
  ]
})
export class CustomizeModule { }
