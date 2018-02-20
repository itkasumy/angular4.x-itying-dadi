import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg: any;

  public username: any;

  public flag: any;

  public search: any;

  constructor() {
    this.msg = '这是一个首页组件';
    this.username = 'lisi';
    this.flag = true;
    this.search = '搜索的内容';
  }

  ngOnInit() {
  }

  getMsg () {
    alert(this.msg);
  }

  setName () {
    this.username = '李四';
  }

  keyupFn (e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      alert('enter pressed!');
    }
  }

  run (e) {
    console.log(e);
  }

  getSearch () {
    alert(this.search);
  }
}
