import { Component, OnInit } from '@angular/core';

// On import le service pour permettre au composant de l'utiliser
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  // Inject the CartService to manage cart information
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    // on recup les items lors de l'initialisation du composant
    this.items = this.cartService.getItems();
  }

}
