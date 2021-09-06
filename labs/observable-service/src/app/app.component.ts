import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'observable-service';

  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart();
  }
}
