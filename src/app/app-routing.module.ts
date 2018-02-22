import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopcateComponent } from './components/shopcate/shopcate.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: '**',
        redirectTo: 'welcome'
      }
    ]
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'shoplist',
        component: ShoplistComponent
      },
      {
        path: 'shopcate',
        component: ShopcateComponent
      },
      {
        path: '**',
        redirectTo: 'shoplist'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
