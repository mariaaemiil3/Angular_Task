import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [
    { id: 1, name: 'Arts & Crafts' },
    { id: 2, name: 'Automotive' },
    { id: 3, name: 'Baby' },
    { id: 4, name: 'Books' },
    { id: 5, name: 'Eletronics' },
    { id: 6, name: "Women's Fashion" },
    { id: 7, name: "Men's Fashion" },
    { id: 8, name: 'Health & Household' },
    { id: 9, name: 'Home & Kitchen' },
    { id: 10, name: 'Military Accessories' },
    { id: 11, name: 'Movies & Television' },
    { id: 12, name: 'Sports & Outdoors' },
    { id: 13, name: 'Tools & Home Improvement' },
    { id: 14, name: 'Toys & Games' },
  ];

  constructor() {}

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find((c) => c.id === id);
  }
}
