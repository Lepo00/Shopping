import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Payment } from 'src/app/core/models/payment';
import { Product } from 'src/app/core/models/product';
import { Shipping } from 'src/app/core/models/shipping';
import { User } from 'src/app/core/models/user';
import { HttpCommunicationsService } from 'src/app/core/services/http-communications.service';
import { selectProducts } from 'src/app/redux/cart';
import { selectPayment } from 'src/app/redux/payment';
import { savePayment } from 'src/app/redux/payment/payment.actions';
import { selectShipping } from 'src/app/redux/shipping';
import { updateUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  done: boolean;
  payment: Payment;
  user: User;
  payForm:FormGroup;
  shipping: Shipping;
  products: Product[];
  price:number;
  spedizione:number;
  
  constructor(private store:Store, private fb:FormBuilder, private http: HttpCommunicationsService) { 
    this.user=JSON.parse(sessionStorage.getItem("user"));
    this.done=false;
   }

  ngOnInit(): void {
    this.store.pipe(select(selectShipping)).subscribe(shipping=>{
      this.shipping=shipping;
      if(this.shipping==null){
        this.shipping=this.user.shipping;
      }
    });
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
      this.calcPrice();
    });
    this.store.pipe(select(selectPayment)).subscribe(payment=>{
      this.payment=payment;
      if(this.payment==null){
        this.payment=this.user.payment;
    }
    this.payForm=this.fb.group({
      method: [this.payment==null?'':this.payment.method, Validators.required],
      type: [this.payment==null?'':this.payment.type,Validators.required],
      number: [this.payment==null?'':this.payment.number, Validators.required],
      cvv: [this.payment==null?'':this.payment.cvv, Validators.compose([Validators.required,Validators.minLength(3)])],
    })
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
    this.payment=this.payForm.value;
    this.store.dispatch(savePayment({payment:this.payment}));
    this.done=true;
    this.mail();
  }

  addPay(){
    this.pay();
    this.user.payment=this.payment;
    this.store.dispatch(updateUser({user:this.user}));
  }

  mail(){
    let msg:string="Hai fatto un acquisto su CalcioStore\nPrezzo: "+this.price+"\n";
    msg+="Prodotti:\n"
    this.products.forEach(element => {
      msg+=element.team+" "+element.player+" "+element.price+"\n";
    });
    msg+="Shipping:\n"
    msg+=this.shipping.address+" "+this.shipping.city+" "+this.shipping.cap;
    
    const email = this.payForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.sendMail('https://formspree.io/xqkgzbre',
        { name: this.user.username, replyto: 'luca.leporati@outlook.com', message: msg},
        { 'headers': headers }).subscribe(
          response => {
            console.log(response+" risposta");
          }
        );
  }
}
