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


  sum = 0;

  service = 0;

  discount = 0;

  total = 0;

  calculateSum():number {

  for(let item of this.items) {

    this.sum+=item.price

  }

  return this.sum


  }

  calculateService(): number {


    this.service = this.sum / 100 * 10

    return this.service
  }

  calculateDiscount(): number {

    if (this.sum + this.service > 40) {
      this.discount = (this.sum + this.service) / 100 * 15

    }

    return this.discount
  }

  calculateTotal(): number {


    this.total=this.sum+this.service+this.discount

    return this.total
  }

  constructor(private cartService:CartService) { }

  ngOnInit(): void {


    this.items=this.cartService.getItems();




  }

}
