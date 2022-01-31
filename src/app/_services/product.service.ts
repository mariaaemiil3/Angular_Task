import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
      _id: 1,
      data: [{ id: 1, name: 'iPhone 6s', description: 'Smart phone' }],
      price: 2500,
      discount: 300,
      imagesUrls: ['https://picsum.photos/200/300'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 2,
      data: [{ id: 1, name: 'iPhone 7', description: 'Smart phone' }],
      price: 3000,
      discount: 0,
      imagesUrls: ['https://picsum.photos/200/100'],
      categoryId: '5',
      tags: [{ name: 'tag-2' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 3,
      data: [{ id: 1, name: 'iPhone 7 Plus', description: 'Smart phone' }],
      price: 4500,
      discount: 100,
      imagesUrls: ['https://picsum.photos/200/200'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 4,
      data: [{ id: 1, name: 'iPhone 8', description: 'Smart phone' }],
      price: 3500,
      discount: 0,
      imagesUrls: ['https://picsum.photos/200/50'],
      categoryId: '5',
      tags: [{ name: 'tag-2' }, { name: 'tag-3' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 5,
      data: [{ id: 1, name: 'iPhone 8 Plus', description: 'Smart phone' }],
      price: 4500,
      discount: 0,
      imagesUrls: ['https://picsum.photos/200/400'],
      categoryId: '5',
      tags: [{ name: 'tag-3' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 6,
      data: [{ id: 1, name: 'iPhone X', description: 'Smart phone' }],
      price: 10000,
      discount: 200,
      imagesUrls: ['https://picsum.photos/200/500'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }, { name: 'tag-2' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 7,
      data: [{ id: 1, name: 'iPhone XR', description: 'Smart phone' }],
      price: 20600,
      discount: 0,
      imagesUrls: ['https://picsum.photos/200/800'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }, { name: 'tag-3' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 8,
      data: [{ id: 1, name: 'iPhone XS MAX', description: 'Smart phone' }],
      price: 20600,
      discount: 300,
      imagesUrls: ['https://picsum.photos/200/80'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }],
      payementType: [{ name: 'Visa' }],
    },
    {
      _id: 9,
      data: [{ id: 1, name: 'iPhone 11', description: 'Smart phone' }],
      price: 22500,
      discount: 300,
      imagesUrls: ['https://picsum.photos/200/700'],
      categoryId: '5',
      tags: [{ name: 'tag-1' }],
      payementType: [{ name: 'Visa' }],
    },
  ];

  newProduct!: Product;
  newProductIdx!: number;
  //productsCart : Cart = {productsArray:[],totalNumberOfElements:0};

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Product[] {
    return this.productsArray;
  }

  // getAllProducts(): Observable<{
  //   product: Product[];
  //   numberOfProducts: number;
  // }> {
  //   return this.httpClient.get<{
  //     product: Product[];
  //     numberOfProducts: number;
  //   }>(`${environment.baseUrl}product`);
  //   // return this.productsArray;
  // }

  // getProductById(n: string): Observable<Product> {
  //   return this.httpClient.get<Product>(`${environment.baseUrl}product/${n}`);
  //   //return this.productsArray.find((e) => e.id === n);
  // }
  getProductById(n: number): Product {
    //return this.httpClient.get<Product>(`${environment.baseUrl}product/${n}`);
    
    return this.productsArray.find((e) => e._id == n)!;
  }

  addProduct(p: Product): Product[] {
    //this.productsCart.productsArray.push(p);
    this.productsArray.push(p);
    console.log(this.productsArray);
    
    return this.productsArray;
  }

  editProduct(p: Product) : Product{
    this.newProductIdx = this.productsArray.findIndex(
      (item) => item._id === p._id
    );
    this.newProduct = this.productsArray[this.newProductIdx];
    this.newProduct.data[0].name = p.data[0].name;
    this.newProduct.data[0].description = p.data[0].description;
    return this.newProduct;
  }


  deleteProduct(pId:number){
    const pIdx = this.productsArray.findIndex(p=>p._id==pId);
    this.productsArray.splice(pIdx,1);
    //console.log(this.productsArray);
    
  }
  // addItemtoCart(p:Product){

  //   console.log(this.productsCart.productsArray);

  //   //this.productsCart.productsArray.push();
  //   return this.productsCart.productsArray;

  // }
 
}
