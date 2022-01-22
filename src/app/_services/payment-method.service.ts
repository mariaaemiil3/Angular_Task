import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  paymentMethods : PaymentType[] = [
    {id:1,name:"Direct Bank Transfare"},
    {id:2,name:"Cheque Payment"},
    {id:3,name:"Paypal"},
    {id:4,name:"Visa"},
    {id:5,name:"Mastercard"},
    {id:6,name:"On Delivery"},
  ]

  constructor() { }

  getAllPaymentMethods():PaymentType[]{
    return this.paymentMethods;
  }
}
