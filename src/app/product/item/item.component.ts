import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product_item.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  productItem !: Product;

  // @Output()
  // itemAdded : EventEmitter <Product> = new EventEmitter <Product> ();

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
  }

  onAddToCartPressed(){
    //console.log("Add to cart pressed");
    //this.itemAdded.emit(this.productItem);
    this.productService.itemAdded.emit(this.productItem);
    
  }

  deleteProduct(pId:number){
    this.productService.deleteProduct(pId);
  }

  ngOnDestroy():void{

  }

}
