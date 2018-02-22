import { Component, OnInit } from '@angular/core';

// 引入 Router       NavigationExtras get 传参
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNews () {
    // alert('123');
    // this.router.navigate(['/news']);
    this.router.navigate(['/newscontent', '2']);
  }

  goShop (id, aid) {
    // 跳转路由 get 传值
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'id': id,
        'aid': aid
      }
      // fragment: 'anchor'
    };
    // 配置参数
    this.router.navigate(['/shoplist'], navigationExtras);
  }

}
