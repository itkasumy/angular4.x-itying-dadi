import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewssComponent } from './components/newss/newss.component';

import { StorageService } from './services/storage.service';

import { HttpModule, JsonpModule } from '@angular/http'; // 注入数据请求模块


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    TodolistComponent,
    NewssComponent
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
