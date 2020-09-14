import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';
import { removeToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  promoz:boolean;
  netto:number;
  tot:number;
  tasse:number;
  spedizione:number=0;
  products: Product[];
  constructor(private store:Store) { 
    this.promoz=false;
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      this.calcPrice();
    });
  }

  returnImage(team:string):string{
    switch(team){
      case 'liverpool': return "../../../assets/img/liverpool.jpg";
      case 'inter': return "../../../assets/img/inter.jpeg";
      case 'atalanta': return "../../../assets/img/atalanta.jpeg";
      case 'milan': return "../../../assets/img/milan.jpeg";
    }
  }

  remove(id:number){
    this.store.dispatch(removeToCart({id}));
    this.calcPrice();
  }

  calcPrice(){
    this.tot=0;
    this.products.forEach(item => {
      this.tot+=item.price;
    });
    if(this.tot<100){
      this.spedizione=5;
      this.tot+=this.spedizione;
    }else{
      this.spedizione=0;
    }
    this.tasse=this.tot*18/100;
    this.netto=this.tot*82/100;
  }

  promo(code:string):boolean{
    if(code=="10%" && this.promoz==false){
      this.tot*=90/100;
      this.promoz= true;
    }
    return this.promoz;
  }

}

