import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.params.value.id); // 错误的写法

    this.route.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
  }

}
