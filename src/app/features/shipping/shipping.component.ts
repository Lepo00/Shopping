import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
import { User } from 'src/app/core/models/user';
import { selectShipping } from 'src/app/redux/shipping';
import { saveShipping } from 'src/app/redux/shipping/shipping.actions';
import { selectUsers } from 'src/app/redux/user';
import { updateUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shipping:Shipping;
  user:User;
  shipForm: FormGroup;
  constructor(private store:Store, private router: Router, private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectShipping)).subscribe(shipping=>{
      this.user=JSON.parse(sessionStorage.getItem("user"));
      this.shipping=shipping;
      if(this.shipping==null){
        this.shipping=this.user.shipping;
      }
    });
    this.shipForm = this.fb.group({
      name: [this.shipping?.name, Validators.required],
      surname: [this.shipping?.surname, Validators.required],
      phone: [this.shipping?.phone, Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(10)])],
      city: [this.shipping?.city, Validators.required],
      cap: [this.shipping?.cap, Validators.required],
      address: [this.shipping?.address,Validators.required],
      number: [this.shipping?.number, Validators.required],
      info: [this.shipping?.info],
    });
  }

  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};
  saveShipping(){
    this.shipping=this.shipForm.value;
    this.store.dispatch(saveShipping({shipping:this.shipping}));
  }

  addShip(){
    this.saveShipping();
    this.user.shipping=this.shipping;
    this.store.dispatch(updateUser({user:this.user}));
  }

}
