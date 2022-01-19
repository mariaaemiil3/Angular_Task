import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './notFound/error.component';
import { ItemsContainerComponent } from './product/items-container/items-container.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {path:'home',component:ItemsContainerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
