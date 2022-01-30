import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  productItem !: Product;

  relatedProductsArray!: Product[];
  pArray!: Product[];
  product!: Product;
  pIdx!: number;
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
    this.pIdx = this.pArray.findIndex((p) => p._id == this.product._id);
    this.relatedProductsArray = this.pArray
    //.splice(this.pIdx + 1, 4);
    return this.relatedProductsArray;
  }

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
    return this.categoryService.getCategoryById(cId).name;
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


  onAddToCartPressed(){
    //console.log("Add to cart pressed");
    //this.itemAdded.emit(this.productItem);
    this.productService.itemAdded.emit(this.product);
    
  }

  deleteProduct(pId:number){
    this.productService.deleteProduct(pId);
  }

}
