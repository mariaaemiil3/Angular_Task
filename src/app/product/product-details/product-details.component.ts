import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product_item.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  relatedProductsArray!: Product[];
  product!: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  getAllRelatedProducts() {
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.relatedProductsArray = res.product.splice(0, 4);
      },
      (err) => {
        console.log('err happened');
      },
      () => {}
    );
  }

  getProductById(n: string) {
    this.productService.getProductById(n).subscribe(
      (res) => {
        this.product = res;
      },
      (err) => {
        console.log(`err happened : ${err}`);
      },
      () => {}
    );
  }

  ngOnInit(): void {
    //const id = this.activatedRoute.snapshot.params['productId'];
    this.activatedRoute.params.subscribe((params) => {
      const id = params['productId'];
      console.log(params);
      if (id) {
        this.getProductById(id);
        this.getAllRelatedProducts();
      }
    });
  }
}
