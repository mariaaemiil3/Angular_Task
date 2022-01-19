import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from '../_models/cart.model';
import { Product } from '../_models/product_item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();
  // itemDeleted: EventEmitter<Product> = new EventEmitter<Product>();

  productsArray: Product[] = [
    {
      name: 'iPhone 6s',
      price: 2500,
      discount: 300,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      name: 'iPhone 7',
      price: 3000,
      discount: 0,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/100',
    },
    {
      name: 'iPhone 7 Plus',
      price: 4500,
      discount: 100,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/200',
    },
    {
      name: 'iPhone 8',
      price: 3500,
      discount: 0,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/50',
    },
    {
      name: 'iPhone 8 Plus',
      price: 4500,
      discount: 0,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/400',
    },
    {
      name: 'iPhone x',
      price: 10000,
      discount: 200,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/500',
    },
    {
      name: 'iPhone XR',
      price: 20600,
      discount: 0,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/800',
    },
    {
      name: 'iPhone XS Max',
      price: 20600,
      discount: 300,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/80',
    },
    {
      name: 'iPhone 11',
      price: 22500,
      discount: 300,
      description: 'smart phone from apple',
      imageUrl: 'https://picsum.photos/200/700',
    },
  ];

  //productsCart : Cart = {productsArray:[],totalNumberOfElements:0};

  constructor() {}

  getAllProducts(): Product[] {
    return this.productsArray;
  }

  getProductByName(n: string): Product | undefined {
    return this.productsArray.find((e) => e.name === n);
  }

  addProduct(p: Product): Product[] {
    //this.productsCart.productsArray.push(p);
    this.productsArray.push(p);
    return this.productsArray;
  }


  // addItemtoCart(p:Product){

  //   console.log(this.productsCart.productsArray);
    
  //   //this.productsCart.productsArray.push();
  //   return this.productsCart.productsArray;

  // }
  // deleteProduct(p:Product): Product[]{

  // }
}
