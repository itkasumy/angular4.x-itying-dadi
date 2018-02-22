import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('cart') cart; // 定义子组件 注意括号里面的东西和 #cart 对应起来

  constructor() { }

  ngOnInit() {
  }

  getChildData () {
    // this.cart.run();
    alert(this.cart.msg);
  }

}
