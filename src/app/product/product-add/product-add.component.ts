import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodService } from 'src/app/_services/payment-method.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  categoriesArray!: Category[];
  paymentMethodsArray !: PaymentType[];

  constructor(private categoryService: CategoryService, private paymentTypeService:PaymentMethodService) {}

  ngOnInit(): void {
    this.categoriesArray = this.getAllCategories();
    this.paymentMethodsArray = this.getPaymentMethods();
  }

  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }

  getPaymentMethods(): PaymentType[]{
    return this.paymentTypeService.getAllPaymentMethods();
  }

  onCheckBoxChange(i:number){
    console.log(this.paymentMethodsArray[i]);

  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
