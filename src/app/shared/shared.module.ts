import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component'


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    MenuComponent,
  ]
})
export class SharedModule { }
