import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesModule } from '../features.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    FeaturesModule,
    NgbModule,
  ]
})
export class HomeModule { }
