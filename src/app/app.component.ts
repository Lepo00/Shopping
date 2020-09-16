import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllProducts, initCart, retrieveAllTeams } from './redux/cart/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(retrieveAllProducts());
    this.store.dispatch(retrieveAllTeams());
  }
  title = 'Shopping';
  
}
