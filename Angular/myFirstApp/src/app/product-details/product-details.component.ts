import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

//  use product data from an external file
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // Define the product property
  product;


  // inject the ActivatedRoute into the constructor
  /* The ActivatedRoute is specific to each routed component loaded by the Angular Router.
    It contains information about the route, its parameters, and additional data associated with the route. */
  constructor(
    private route: ActivatedRoute,
    ) { }

  // subscribe to route params and fetch the product based on the productId
  // semble recuperer les infos associés a current produit
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
