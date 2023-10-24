import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // products = [
  //   {
  //     id: 1,
  //     title: 'Laptops',
  //     price: 1095,
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'T-Shirts ',
  //     price: 2223,
  //     image:
  //       'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Cotton Jacket',
  //     price: 5599,
  //     image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Casual Slim Fit',
  //     price: 1599,
  //     image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  //   },
  //   {
  //     id: 5,
  //     title:
  //       " Chain Bracelet",
  //     price: 6950,
  //     image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  //   },
  //   {
  //     id: 6,
  //     title: ' Micropave ',
  //     price: 1688,
  //     image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  //   },
  //   {
  //     id: 7,
  //     title: 'White Gold Plated',
  //     price: 9999,
  //     image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  //   },
  //   {
  //     id: 8,
  //     title: 'Stainless Steel',
  //     price: 1099,
  //     image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  //   },
  // ];
  Products: Product[] = [];
  storageService: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    // private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.Products = data;
        this.productService.saveProducts(data); //load product to local storage
      },
      complete: () => {
        console.log('success');
      },
      error: (error: Error) => {
        console.log('Message', error.message);
        console.log('Name', error.name);
      },
    });
  }

  addToCart(id:number):void {
    this.cartService.addToCart(id);
  }
}
