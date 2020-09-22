import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpCommunicationsService } from './services/http-communications.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [HttpCommunicationsService],
})
export class CoreModule { }
