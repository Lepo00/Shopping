import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProducts } from 'src/app/redux/cart';
import { Product } from 'src/app/core/models/product';
import { removeToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Product[];
  @Input()
  title:string;
  @Input()
  home:boolean;

  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });
  }

  rimuovi(id:number){
    this.store.dispatch(removeToCart({id}));
  }

}
