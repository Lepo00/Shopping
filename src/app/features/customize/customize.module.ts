import { NgModule } from '@angular/core';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './customize.component';
import { FeaturesModule } from '../features.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CustomizeRoutingModule,
    FeaturesModule,
    SharedModule,
  ]
})
export class CustomizeModule { }
