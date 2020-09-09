import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  addToCart(text){
    this.store.dispatch(addToCart({product: text}));
  }

}
