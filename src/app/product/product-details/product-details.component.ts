import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product_item.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  
  productsArray : Product[]=this.productService.getAllProducts() ;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

}
