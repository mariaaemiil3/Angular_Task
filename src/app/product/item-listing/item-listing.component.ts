import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product_item.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss']
})
export class ItemListingComponent implements OnInit {

  // @Output()
  // itemAddedFromList : EventEmitter <Product> = new EventEmitter<Product>();

  productsArray : Product[]=this.productService.getAllProducts() ;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  // onItemAdded(product : Product){
  //   //console.log("item list");
  //   ///this.itemAddedFromList.emit(product);
  //   this.productService.addProduct(product);
  // }

}
