import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../_models/cart.model';
import { Product } from '../_models/product_item.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-mid-navbar',
  templateUrl: './mid-navbar.component.html',
  styleUrls: ['./mid-navbar.component.scss'],
})
export class MidNavbarComponent implements OnInit {
  // @Input()
  productsCart : Cart={productsArray:[],totalNumberOfElements:0};

  // @Output()
  // productToBeRemoved : EventEmitter <Product> = new EventEmitter <Product> ();

  cartIsOpen = false;
  total : number = 0;

  constructor(private productService:ProductService) {}

  ngOnInit(): void {

    this.productService.itemAdded.subscribe(
      (next)=>{
        if( !this.productsCart.productsArray.find( obj=> obj.product === next)){
          this.productsCart.productsArray.push({product:next,quantity:1}) ;
          //console.log(this.productsCart.productsArray);
          
        }else{
          let productIndex = this.productsCart.productsArray.findIndex(pro => pro.product === next);
          this.productsCart.productsArray[productIndex].quantity++;
        }
        this.productsCart.totalNumberOfElements++;
        //console.log(this.productsCart.totalNumberOfElements);
        
      }
    )
  }

  removeClickedProduct(toBeRemoved : Product){
    
    const index = this.productsCart.productsArray.findIndex(pro => pro.product === toBeRemoved);
    if (index > -1) {
      this.productsCart.totalNumberOfElements -= this.productsCart.productsArray[index].quantity;
      this.productsCart.productsArray.splice(index, 1);
   }

  }

  

  calculateTotal() : number{
    
    this.total=0;
    for (const i of this.productsCart.productsArray) 
      this.total += ((i.product.price-i.product.discount)*i.quantity);
    
    return this.total;
  }
}
