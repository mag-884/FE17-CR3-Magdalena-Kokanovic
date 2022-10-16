import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  dish: IDishes = {} as IDishes;
  id:number=0;

  constructor(private route:ActivatedRoute, private cartService:CartService) { }

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.dish);
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishId'];
      this.dish = dishes[this.id];
    });
  }

}
