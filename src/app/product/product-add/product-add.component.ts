import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-add-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  categoriesArray!: Category[];
  paymentMethodsArray!: PaymentType[];
  tagsArray!: Tag[];
  newProduct: Product = {
    _id: 0,
    data: [{ name: '', description: '' }],
    price: 0,
    discount: 0,
    categoryId: '',
    imagesUrls: ['https://picsum.photos/300/300'],
    payementType: [{ name: '' }],
    tags: [{ name: '' }],
  };

  @ViewChild('paymentTy') payment!:ElementRef;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private paymentTypeService: PaymentMethodService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.categoriesArray = this.categoryService.getAllCategories();
    // this.getAllCategories();
    this.paymentMethodsArray = this.getPaymentMethods();
    this.tagsArray = this.getAllTags();
  }

  getAllTags(): Tag[] {
    return this.tagService.getAllTags();
  }

  // getAllCategories(){
  //    this.categoryService.getAllCategories().subscribe(
  //     (res)=>{
  //       this.categoriesArray = res;
  //     },
  //     (err)=>{
  //       console.log("Error getting categories");

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
    console.log(form.value);


    this.newProduct.data[0].name = form.value['name'];
    this.newProduct.data[0].description = form.value['description'];
    if (form.value['onSale']==1) this.newProduct.discount = form.value['discount'];
    else this.newProduct.discount = 0;
    this.newProduct.price = form.value['price'];

    console.log(form.value['category']);
    this.newProduct.categoryId = form.value['category'];

    this.newProduct.tags[0].name = 'tag-1';
    
    this.newProduct.payementType.pop();
    if(form.value['check-0']==true) this.newProduct.payementType.push({name:"Direct Bank Transfare"})
    if(form.value['check-1']==true) this.newProduct.payementType.push({name:"Cheque Payment"})
    if(form.value['check-2']==true) this.newProduct.payementType.push({name:"Paypal"})
    if(form.value['check-3']==true) this.newProduct.payementType.push({name:"Visa"})
    if(form.value['check-4']==true) this.newProduct.payementType.push({name:"Mastercard"})
    if(form.value['check-5']==true) this.newProduct.payementType.push({name:"On Delivery"})
    
    // console.log(form.value);

    this.productService.addProduct(this.newProduct);
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
