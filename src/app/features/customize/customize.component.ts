import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  immagine: string;
  customizeForm: FormGroup;

  get teamControl(): FormControl{
    return this.customizeForm.get('team') as FormControl;
  }

  get championsControl(): FormControl{
    return this.customizeForm.get('champions') as FormControl;
  }

  get playerControl(): FormControl{
    return this.customizeForm.get('player') as FormControl;
  }

  get colorControl(): FormControl{
    return this.customizeForm.get('color') as FormControl;
  }


  constructor(private store:Store, private fb: FormBuilder) {
    this.customizeForm = this.fb.group({
      team: ['', Validators.required],
      champions: false,
      player: ['',Validators.required],
      color: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};

  addToCart(){
    let product:Product=this.customizeForm.value;
    this.calcPrice(product);
    this.store.dispatch(addToCart({product}));
    //this.cls();
  }

  calcPrice(product: Product) {
    switch(product.team){
      case 'liverpool': product.price=10;
      break;
      case 'inter': product.price=20;
      break;
      case 'atalanta': product.price=30;
      break;
      case 'milan': product.price=40;
      break;
    }
    if(product.champions==true)
      product.price+=100;
  }

  cls(){
    this.customizeForm.reset();
    this.changeImage(-1);
  }

  changeImage(id:number){
    switch(id){
        case -1: this.immagine=null;
        break;
        case 0: this.immagine= "../../../assets/img/inter.jpeg";
        break;
        case 1: this.immagine= "../../../assets/img/liverpool.jpg";
        break;
        case 2: this.immagine= "../../../assets/img/atalanta.jpeg";
        break;
        case 3: this.immagine= "../../../assets/img/milan.jpeg";
        break;
    }
  }

}
