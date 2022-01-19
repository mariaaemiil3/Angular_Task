import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product_item.model';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent implements OnInit {
  // @Output()
  // itemAddedFromContainer: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  // itemAdded(product: Product) {
  //   //console.log('From container');
  //   this.itemAddedFromContainer.emit(product);
  // }
}
