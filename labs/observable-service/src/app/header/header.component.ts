import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartItemsCount = 0;
  shoppingCartSub: Subscription;
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartSub =
      this.shoppingCartService.shoppingCartChanged$.subscribe(
        (data) => (this.cartItemsCount = data)
      );
  }

  OnDestroy() {
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.shoppingCartSub.unsubscribe();
  }
}
