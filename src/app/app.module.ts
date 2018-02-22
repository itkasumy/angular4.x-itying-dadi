import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopcateComponent } from './components/shopcate/shopcate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    WelcomeComponent,
    ShoplistComponent,
    ShopcateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
