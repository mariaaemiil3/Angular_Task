import { Injectable } from '@angular/core';
import { Tag } from '../_models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags : Tag[]=[
    {id:1,name:'Nike'},
    {id:2,name:'Travel'},
    {id:3,name:'Sport'},
    {id:4,name:'Tv'},
    {id:5,name:'Books'},
    {id:6,name:'Tech'},
    {id:7,name:'Addidas'},
    {id:8,name:'Promo'},
    {id:9,name:'Reading'},
    {id:10,name:'Social'},
    {id:11,name:'New'},
    {id:12,name:'Special'},
    {id:13,name:'Food'},
    {id:14,name:'Used'},
  ];

  constructor() { }

  getAllTags(){
    return this.tags;
  }
}
