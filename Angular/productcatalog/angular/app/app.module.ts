import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ServicesComponent } from './services/services.component';
import { ToysComponent } from './category/toys/toys.component';
import { ItemsComponent } from './category/items/items.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TextilesComponent } from './category/textiles/textiles.component';
import { BabyproductsComponent } from './category/babyproducts/babyproducts.component';
import { ViewproductComponent } from './category/viewproduct/viewproduct.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    ServicesComponent,
    ToysComponent,
    ItemsComponent,
    SlideshowComponent,
    TextilesComponent,
    BabyproductsComponent,
    ViewproductComponent,
    ProductcreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
