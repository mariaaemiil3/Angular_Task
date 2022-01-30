import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product_item.model';
import { Tag } from 'src/app/_models/tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodService } from 'src/app/_services/payment-method.service';
import { ProductService } from 'src/app/_services/product.service';
import { TagService } from 'src/app/_services/tag.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  categoriesArray!: Category[];
  paymentMethodsArray!: PaymentType[];
  tagsArray!: Tag[];
  updatedProduct!: Product;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private paymentTypeService: PaymentMethodService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    //this.getAllCategories();
    this.categoriesArray = this.categoryService.getAllCategories();

    this.paymentMethodsArray = this.getPaymentMethods();
    this.tagsArray = this.getAllTags();
  }

  editProduct(p: Product): Product {
    return this.updatedProduct =  this.productService.editProduct(p);
  }

  getAllTags(): Tag[] {
    return this.tagService.getAllTags();
  }

  // getAllCategories() {
  //   this.categoryService.getAllCategories().subscribe(
  //     (res) => {
  //       this.categoriesArray = res;
  //     },
  //     (err) => {
  //       console.log('Error getting categories');
  //     }
  //   );
  // }

  getPaymentMethods(): PaymentType[] {
    return this.paymentTypeService.getAllPaymentMethods();
  }

  onCheckBoxChange(i: number) {
    console.log(this.paymentMethodsArray[i]);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
