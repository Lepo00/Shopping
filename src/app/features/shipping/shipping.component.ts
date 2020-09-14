import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Shipping } from 'src/app/core/models/shipping';
import { saveShipping } from 'src/app/redux/shipping/shipping.actions';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
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
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};
  saveShipping(){
    let shipping:Shipping=this.shipForm.value;
    this.store.dispatch(saveShipping({shipping}));
    this.router.navigateByUrl("/checkout");
  }
}
