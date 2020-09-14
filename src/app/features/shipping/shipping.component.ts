import { Component, OnInit } from '@angular/core';
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

  constructor(private store:Store, private router: Router) { }

  ngOnInit(): void {
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};
  saveShipping(){
    let shipping:Shipping={"name":"luca","surname":"lepo","address":"Via aleVolta25/7","cap":"24050","city":"palosco","info":"ocio al ca'","number":23,"phone":"3456753987"};
    this.store.dispatch(saveShipping({shipping}));
    this.router.navigateByUrl("/checkout");
  }
}
