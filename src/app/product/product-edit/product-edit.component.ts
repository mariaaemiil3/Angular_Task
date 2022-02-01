import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  updatedProduct:Product = {
    _id: 0,
    data: [{ name: '', description: '' }],
    price: 0,
    discount: 0,
    categoryId: '',
    imagesUrls: ['https://picsum.photos/300/500'],
    payementType: [{ name: '' }],
    tags: [{ name: '' }],
  };
  product!: Product;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private paymentTypeService: PaymentMethodService,
    private tagService: TagService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['productId'];
      console.log(params);
      if (id) {
        this.product = this.getProductById(id);
        console.log(this.product);
      }
    });
    //this.getAllCategories();
    this.categoriesArray = this.categoryService.getAllCategories();

    this.paymentMethodsArray = this.getPaymentMethods();
    this.tagsArray = this.getAllTags();
  }

  getProductById(pId: number): Product {
    return this.productService.getProductById(pId);
  }

  editProduct(form: NgForm): Product {
    this.updatedProduct._id = this.product._id;
    this.updatedProduct.data[0].name = form.value['name'];
    this.updatedProduct.data[0].description = form.value['description'];
    this.updatedProduct.price = form.value['price'];
    if (form.value['onSale']==1) this.updatedProduct.discount = form.value['discount'];
    else this.updatedProduct.discount = 0;
    
    return this.productService.editProduct(this.updatedProduct);
  }

  getAllTags(): Tag[] {
    return this.tagService.getAllTags();
  }

  ///using backend
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

}
