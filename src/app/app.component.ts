import { Component } from '@angular/core';
import { Cart } from './_models/cart.model';
import { Product } from './_models/product_item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'day2_task';
////////////////////////
  //  addedProducts : Cart={productsArray:[],totalNumberOfElements:0}; 

  // itemAdded(item: Product) {

  //   if( !this.addedProducts.productsArray.find( obj=> obj.product === item)){
  //     this.addedProducts.productsArray.push({product:item,quantity:1}) ;
  //   }else{
  //     let productIndex = this.addedProducts.productsArray.findIndex(pro => pro.product === item);
  //     this.addedProducts.productsArray[productIndex].quantity++;
  //   }
  //   this.addedProducts.totalNumberOfElements++;
    
  // }

  //// itemToBeRemoved(product :Product){
  //   const index = this.addedProducts.productsArray.findIndex(pro => pro.product === product);
  //   if (index > -1) {
  //     this.addedProducts.totalNumberOfElements -= this.addedProducts.productsArray[index].quantity;
  //     this.addedProducts.productsArray.splice(index, 1);
  //  }
  // //  console.log(this.addedProducts);
   
  //// }

  
}
