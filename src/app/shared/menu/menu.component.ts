import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProducts } from 'src/app/redux/cart';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  get products() : Observable<Product[]>{
    return this.store.pipe(select(selectProducts));
  };

  constructor(private store:Store) { 
  }

  ngOnInit(): void {
  }

}
