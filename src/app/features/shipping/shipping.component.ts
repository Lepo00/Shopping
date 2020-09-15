import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
import { User } from 'src/app/core/models/user';
import { saveShipping } from 'src/app/redux/shipping/shipping.actions';
import { selectUsers } from 'src/app/redux/user';
import { updateUser } from 'src/app/redux/user/user.actions';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  user:User;
  shipForm: FormGroup;
  constructor(private store:Store, private router: Router, private fb:FormBuilder) {
    this.shipForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(10)])],
      city: ['', Validators.required],
      cap: ['', Validators.required],
      address: ['',Validators.required],
      number: ['', Validators.required],
      info: [''],
    });
  }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};
  saveShipping(){
    let shipping:Shipping=this.shipForm.value;
    this.store.dispatch(saveShipping({shipping}));
    this.router.navigateByUrl("/checkout");
  }

  addShip(){
    let shipping:Shipping=this.shipForm.value;
    this.user.shipping=shipping;
    this.store.dispatch(updateUser({user:this.user}));
  }
}
