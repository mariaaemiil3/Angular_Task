import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './notFound/error.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ItemsContainerComponent } from './product/items-container/items-container.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:ItemsContainerComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',children:[
    {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductAddComponent},
    {path:'edit',component:ProductEditComponent}
  ]},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
