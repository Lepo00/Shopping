import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';
import { selectProducts } from 'src/app/redux/cart';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  immagine: string;
  products: Product[];
  customizeForm: FormGroup;

  constructor(private store:Store, private fb: FormBuilder) {
    this.customizeForm = this.fb.group({
      team: ['', Validators.required],
      champions: false,
      player: ['', Validators.required],
      color: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};

  addToCart(){
    this.store.dispatch(addToCart({product: this.customizeForm.value}))
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
    // console.log("id:"+id);
    // if(id===0)
    //   this.immagine== "../../../assets/img/inter.jpeg";
    // else if(id===1)
    //   this.immagine== "../../../assets/img/liverpool.jpeg";

  }

}
