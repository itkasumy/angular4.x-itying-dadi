// 引入 Input
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.css']
})
export class HeaderrComponent implements OnInit {

  @Input() msg: string; // 通过 Input 接收父组件传过来的 msg

  // EventEmitter 实现子组件给父组件传值
  @Output() private toParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  requestData () {
    this.toParent.emit('这是子组件的值...');
  }

}
