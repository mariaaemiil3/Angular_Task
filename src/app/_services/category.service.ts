import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [
    { _id: "1", name: 'Arts & Crafts' },
    { _id: "2", name: 'Automotive' },
    { _id: "3", name: 'Baby' },
    { _id: "4", name: 'Books' },
    { _id: "5", name: 'Eletronics' },
    { _id: "6", name: "Women's Fashion" },
    { _id: "7", name: "Men's Fashion" },
    { _id: "8", name: 'Health & Household' },
    { _id: "9", name: 'Home & Kitchen' },
    { _id: "10", name: 'Military Accessories' },
    { _id: "11", name: 'Movies & Television' },
    { _id: "12", name: 'Sports & Outdoors' },
    { _id: "13", name: 'Tools & Home Improvement' },
    { _id: "14", name: 'Toys & Games' },
  ];

  constructor(private httpClient:HttpClient) {}

  getAllCategories(): Category[] {
    return this.categories;
  }



////backend
  // getAllCategories(): Observable<Category[]> {
  //   return this.httpClient.get<Category[]>(`${environment.baseUrl}category`);
  // }

  getCategoryById(id: string): Category {
    return this.categories.find((c) => c._id === id)!;
  }


////backend
  // getCategoryById(id: string): Observable<Category> {
  //   return this.httpClient.get<Category>(`${environment.baseUrl}category/${id}`);
  // }

}
