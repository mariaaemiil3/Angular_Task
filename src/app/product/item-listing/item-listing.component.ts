import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product_item.model';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss']
})
export class ItemListingComponent implements OnInit {

productsArray : Product[] = [
  {name:"iPhone 6s", price:2500, discount:300, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/300"},
  {name:"iPhone 7", price:3000, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/100"},
  {name:"iPhone 7 Plus", price:4500, discount:100, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/200"},
  {name:"iPhone 8", price:3500, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/50"},
  {name:"iPhone 8 Plus", price:4500, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/400"},
  {name:"iPhone x", price:10000, discount:200, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/500"},
  {name:"iPhone XR", price:20600, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/800"},
  {name:"iPhone XS Max", price:20600, discount:300, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/80"},
  {name:"iPhone 11", price:22500, discount:300, description:"smart phone from apple", imageUrl:"https://picsum.photos/200/700"},
]

  constructor() { }

  ngOnInit(): void {
  }

}
