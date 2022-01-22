import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
import { Product } from 'src/app/_models/product_item.model';
import { Tag } from 'src/app/_models/tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { TagService } from 'src/app/_services/tag.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent implements OnInit {
  // @Output()
  // itemAddedFromContainer: EventEmitter<Product> = new EventEmitter<Product>();

  categoriesArray !: Category[];
  tagsArray !: Tag[];

  constructor(private categoryService:CategoryService, private tagService:TagService) {}

  ngOnInit(): void {
    this.categoriesArray = this.getAllCategories();
    this.tagsArray = this.getAllTags();
  }

  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }

  getAllTags():Tag[]{
    return this.tagService.getAllTags();
  }

  // itemAdded(product: Product) {
  //   //console.log('From container');
  //   this.itemAddedFromContainer.emit(product);
  // }
}
