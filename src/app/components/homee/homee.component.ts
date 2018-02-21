import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {

  public msg = '我是 home 组件的 msg';

  constructor() { }

  ngOnInit() {
  }

  run () {
    alert('这是 home 组件的 run 方法');
  }

  getDataFromChild (childData) {
    alert(childData);
  }

}
