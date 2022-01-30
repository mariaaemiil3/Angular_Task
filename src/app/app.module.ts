import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MidNavbarComponent } from './mid-navbar/mid-navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListingComponent } from './product/item-listing/item-listing.component';
import { ItemComponent } from './product/item/item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ItemsContainerComponent } from './product/items-container/items-container.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ErrorComponent } from './notFound/error.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { AboutUsComponent } from './about-us/about-us.component'

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MidNavbarComponent,
    BottomNavbarComponent,
    FooterComponent,
    ItemListingComponent,
    ItemComponent,
    SideNavComponent,
    ItemsContainerComponent,
    ProductDetailsComponent,
    ErrorComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent,
    ProductEditComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
