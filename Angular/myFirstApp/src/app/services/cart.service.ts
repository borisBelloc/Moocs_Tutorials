import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // define an items property to store the list (array) of the current products in the cart
  items = [];

  //  methods to add items to the cart, return cart items, and clear the cart items
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


  constructor() { }
}
