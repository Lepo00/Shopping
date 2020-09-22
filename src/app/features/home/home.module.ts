import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class HomeModule { }
