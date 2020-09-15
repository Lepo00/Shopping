import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Payment } from 'src/app/core/models/payment';
import { Product } from 'src/app/core/models/product';
import { Shipping } from 'src/app/core/models/shipping';
import { selectProducts } from 'src/app/redux/cart';
import { savePayment } from 'src/app/redux/payment/payment.actions';
import { selectShipping } from 'src/app/redux/shipping';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  payForm:FormGroup;
  shipping: Shipping;
  products: Product[];
  price:number;
  spedizione:number;
  constructor(private store:Store, private fb:FormBuilder) {
    this.payForm=fb.group({
    method: ['', Validators.required],
    type: ['',Validators.required],
    number: ['', Validators.compose([Validators.required,Validators.minLength(3)])]
    })
  }

  ngOnInit(): void {
    this.store.pipe(select(selectShipping)).subscribe(shipping=>{
      this.shipping=shipping;
    });
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      this.calcPrice();
    });
  }

  calcPrice(){
    this.price=0;
    this.products.forEach(item => {
      this.price+=item.price;
    });
    if(this.price<100){
      this.spedizione=5;
    }else{
      this.spedizione=0;
    }
    this.price+=this.spedizione;
  }

  pay(){
    let payment:Payment=this.payForm.value;
    this.store.dispatch(savePayment({payment}));
  }
}
