import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  products: Product[];
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      //this.prod.id=this.products.length;
    });
  }
  prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};

  addToCart(text){
    //this.prod.id++;
    this.store.dispatch(addToCart({product: this.prod}))
  }

}
