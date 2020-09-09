import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports:[
    NgbModule,
    CommonModule,
    FormsModule,
    MenuComponent,
  ]
})
export class SharedModule { }
