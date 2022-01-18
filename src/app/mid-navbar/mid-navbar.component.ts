import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../_models/cart.model';
import { Product } from '../_models/product_item.model';

@Component({
  selector: 'app-mid-navbar',
  templateUrl: './mid-navbar.component.html',
  styleUrls: ['./mid-navbar.component.scss'],
})
export class MidNavbarComponent implements OnInit {
  @Input()
  thisAddedProduct !: Cart;

  @Output()
  productToBeRemoved : EventEmitter <Product> = new EventEmitter <Product> ();

  cartIsOpen = false;
  total : number = 0;

  constructor() {}

  ngOnInit(): void {}

  removeClickedProduct(toBeRemoved : Product){
    //console.log(toBeRemoved);
    this.productToBeRemoved.emit(toBeRemoved);
  }


  calculateTotal() : number{
    
    this.total=0;
    for (const i of this.thisAddedProduct.productsArray) 
      this.total += ((i.product.price-i.product.discount)*i.quantity);
    
    return this.total;
  }
}
