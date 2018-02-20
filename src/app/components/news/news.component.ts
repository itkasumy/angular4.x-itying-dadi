import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = '你好 Angular4.x';

  msg: any;

  msg01: string = '这是一个string 类型的msg';

  public username = 'ksm';
  // 声明属性的几种方式
  // public 公有（默认） 可以在这个类里面使用，也可以在类外面使用
  // protected 保护类型 它只有在当前类和它的子类里面可以访问
  // private 私有 只有在当前类才可以访问这个属性

  public id = '123';

  public h = '';

  public list = [];
  public list01: any[];
  public list02: any[];
  public list03: any[];

  public obj = {
    name: 'ksm',
    age: 18
  };

  constructor() {
    this.msg = '这是msg,另一种定义属性的方法';
    this.h = '<h2>这是新闻数据</h2>';
    this.list = [111, 222, 333];
    this.list01 = ['语文', '数学', '英语'];
    this.list02 = [
      {
        title: '111111'
      },
      {
        title: '222222'
      },
      {
        title: '333333'
      }
    ];
    this.list03 = [
      {
        catename: '宝马',
        list: [
          {
            title: '宝马x1'
          },
          {
            title: '宝马x2'
          },
          {
            title: '宝马x3',
          },
          {
            title: '宝马x4'
          }
        ]
      },
      {
        catename: '奥迪',
        list: [
          {
            title: '奥迪q1'
          },
          {
            title: '奥迪q2'
          },
          {
            title: '奥迪q3',
          },
          {
            title: '奥迪q4'
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
