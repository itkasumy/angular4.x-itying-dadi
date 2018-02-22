import { Component, OnInit } from '@angular/core';

// ActivatedRoute 接收动态传值 也可以接收 get 传值
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  public id: any;
  public aid: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params // 获取动态路由
    // this.route.queryParams // 获取 get 传值
    // console.log(this.route.queryParams);
    this.route.queryParams.subscribe(data => {
      console.log(data);
      this.id = data.id;
      this.aid = data.aid;
    });
  }

}
