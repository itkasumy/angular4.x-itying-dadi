import { Component, OnInit } from '@angular/core';

import { Http, Jsonp, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-newsc',
  templateUrl: './newsc.component.html',
  styleUrls: ['./newsc.component.css']
})
export class NewscComponent implements OnInit {

  private headers = new Headers({ 'Content-Type': 'application/josn' });

  public msg = '这是新闻组件的 msg';

  public list = [];

  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
    // this.requestData();
  }

  requestData(e) {
    console.log(e);
    const that = this;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.http.get(url)
      .map(res => res.json())
      .subscribe((data) => {
        that.list = data.result;
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }

}
