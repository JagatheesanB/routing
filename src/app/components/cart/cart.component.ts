import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartProducts:Product[]=[];
  
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    // this.cartProducts = this.cartService.getCartProducts();
  }
}
