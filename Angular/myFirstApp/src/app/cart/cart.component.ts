import { Component, OnInit } from '@angular/core';

// On import le service pour permettre au composant de l'utiliser
import { CartService } from '../services/cart.service';

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  // Inject the CartService to manage cart information
  // + Inject the FormBuilder service
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  /**
   * @param customerData  users need to be able to submit the form data (their name and address)
   *  When the order is submitted, the form should reset and the cart should clear
   */
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    // console.warn('Name : ', customerData.name);
    // console.warn('Adress : ', customerData.address);



    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  ngOnInit() {
  }

}
