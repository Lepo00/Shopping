import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};

  addToCart(text){
    this.store.dispatch(addToCart({product: this.prod}))
  }

}
