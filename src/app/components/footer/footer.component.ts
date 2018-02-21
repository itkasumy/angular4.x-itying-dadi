import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() msg: string;

  @Input() run: any;

  @Input() getDataFromChild;

  public msgc = '这是子组件的数据';

  constructor() { }

  ngOnInit() {
  }

  sendParent () { // 子组件自己的方法
    this.getDataFromChild(this.msgc); // 子组件调用父组件的方法
  }

}
