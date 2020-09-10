import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProducts } from 'src/app/redux/cart';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Product[];

  constructor(private store:Store) { 
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });
  }

}
