import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/_models/cart.model';
import { Category } from 'src/app/_models/category.model';
import { Product } from 'src/app/_models/product_item.model';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  productItem!: Product;

  relatedProductsArray: Product[] = [];
  pArray!: Product[];
  product!: Product;
  pIdx!: number;
  static count: number = 0;
  productsCart: Cart = { productsArray: [], totalNumberOfElements: 0 };
  //productDetails!:Product;
  //thisProduct!:Product;
  category!: Category;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  getAllRelatedProducts() {
    // this.productService.getAllProducts().subscribe(
    //   (res) => {
    //     this.relatedProductsArray = res.product.splice(0, 4);
    //   },
    //   (err) => {
    //     console.log('err happened');
    //   },
    //   () => {}
    // );
    this.pArray = this.productService.getAllProducts();
    this.pIdx = this.pArray.findIndex((p) => p._id === this.product._id);
    this.relatedProductsArray = this.pArray.slice();
    //.splice(this.pIdx + 1, 4);
    return this.relatedProductsArray.splice(this.pIdx, 5);
  }

  ///using backend

  // getProductById(n: string) {
  //   this.productService.getProductById(n).subscribe(
  //     (res) => {
  //       this.product = res;

  //       console.log(res.categoryId);
  //       //return this.product;
  //        this.categoryName=this.getCategoryNameById(res.categoryId);
  //        console.log(this.categoryName);

  //     },
  //     (err) => {
  //       console.log(`err happened : ${err}`);
  //     },
  //     () => {}
  //   );
  //   //return this.product;
  // }

  getProductById(pId: number): Product {
    return this.productService.getProductById(pId);
  }


   ///using backend
  // getCategoryNameById(id:string):string{
  //   this.categoryService.getCategoryById(id).subscribe(
  //     (res)=>{
  //       this.category = res;
  //       return this.category.name;
  //     },
  //     (err) => {
  //       console.log(`err happened : ${err}`);
  //       return "";
  //     }
  //   )
  //   return "";
  // }

  getCategoryNameById(cId: string): string {
    this.category = this.categoryService.getCategoryById(cId);
    return this.category.name;
  }

  ngOnInit(): void {
    //const id = this.activatedRoute.snapshot.params['productId'];
    this.activatedRoute.params.subscribe((params) => {
      const id = params['productId'];
      console.log(params);
      if (id) {
        //this.thisProduct=
        this.product = this.getProductById(id);
        console.log(this.product);

        this.getAllRelatedProducts();
        //console.log(this.thisProduct);

        // this.categoryName=this.getCategoryNameById(this.product.categoryId);
        // console.log(this.categoryName);

        //this.getCategoryNameById)();
      }
    });
  }

  onAddToCartPressed() {

    //console.log("Add to cart pressed");
    //this.itemAdded.emit(this.productItem);
    for (let i = 0; i < this.staticCount; i++) {
      this.productService.itemAdded.emit(this.product);
    }
    
  }

  get staticCount() {
    return ProductDetailsComponent.count;
  }

  increaseQtyPressed(): number {
    ProductDetailsComponent.count++;
    console.log(ProductDetailsComponent.count);
    return ProductDetailsComponent.count;
  }

  decreaseQtyPressed(): number {
    if (ProductDetailsComponent.count > 0) {
      ProductDetailsComponent.count--;
      console.log(ProductDetailsComponent.count);
      return ProductDetailsComponent.count;
    } else return 0;
  }

  // deleteProduct(pId:number){
  //   this.productService.deleteProduct(pId);
  // }
}
