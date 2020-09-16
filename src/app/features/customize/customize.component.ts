import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart, retrieveAllTeams, saveToCart } from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/models/product';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { selectCartState, selectTeams } from 'src/app/redux/cart';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  teams: string[];
  immagine: string;
  customizeForm: FormGroup;
  id:number;
  sub: any;
  constructor(private store:Store, private fb: FormBuilder,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']%4;
    });
    this.store.select(selectTeams).subscribe(teams=>
      this.teams=teams[this.id]
    )
    
    this.customizeForm = this.fb.group({
      team: ['', Validators.required],
      champions: false,
      player: ['',Validators.required],
      color: ['', Validators.required],
    });
  }
  //prod:Product = {"color":"black","player":"eriksen","team":"inter","champions":true};

  addToCart(){
    let product:Product=this.customizeForm.value;
    product.price=this.calcPrice(product);
    this.store.dispatch(addToCart({product}));
    //this.cls();
  }

  calcPrice(prod:Product):number {
    let price:number=(this.teams.indexOf(prod.team)+1)*10;
    if(prod.champions)
      price+=100;
    return price;
  }

  cls(){
    this.customizeForm.reset();
    this.changeImage(-1);
  }

  changeImage(id:number){
    if(id==-1)
      this.immagine=null;
    else
      this.immagine= "../../../assets/img/"+this.teams[id]+".jpeg";}
}
