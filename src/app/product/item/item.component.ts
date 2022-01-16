import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product_item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  productItem !: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
