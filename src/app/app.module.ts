import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpModule, JsonpModule } from '@angular/http'; // 注入数据请求模块

import { StorageService } from './services/storage.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewssComponent } from './components/newss/newss.component';
import { HeaderrComponent } from './components/headerr/headerr.component';
import { NewscComponent } from './components/newsc/newsc.component';
import { HomeeComponent } from './components/homee/homee.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    TodolistComponent,
    NewssComponent,
    HeaderrComponent,
    NewscComponent,
    HomeeComponent,
    FooterComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, // 注入数据请求模块
    JsonpModule // 注入数据请求模块
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
