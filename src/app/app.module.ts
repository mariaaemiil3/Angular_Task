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
    ItemsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
