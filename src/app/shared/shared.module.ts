import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    MenuComponent,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
