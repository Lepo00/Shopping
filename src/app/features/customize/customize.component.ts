import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  immagine: string;
  customizeForm: FormGroup;
  id:number;
  sub: any;
  constructor(private store:Store, private fb: FormBuilder,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.customizeForm = this.fb.group({
      team: [this.teamSelected(), Validators.required],
      champions: false,
      player: ['',Validators.required],
      color: ['', Validators.required],
    });
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

  teamSelected():string{
    let id=this.id%5;
    this.changeImage(id-1);
    switch(id){
      case 0: return "";
      case 1: return "inter";
      case 2: return "liverpool";
      case 3: return "atalanta";
      case 4: return "milan";
    }
  }

}
