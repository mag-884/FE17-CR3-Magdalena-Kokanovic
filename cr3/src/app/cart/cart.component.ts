import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  items: IDishes[] = [];

  sum=0;

  makeSumm():number {

  for(let item of this.items) {

    this.sum+=item.price

  }

  return this.sum


  }


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
   
  
    this.items=this.cartService.getItems();

     


  }

}
