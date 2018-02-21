import { Component, OnInit } from '@angular/core';

import { Http, Jsonp, Headers } from '@angular/http'; // 导入数据请求模块

@Component({
  selector: 'app-newss',
  templateUrl: './newss.component.html',
  styleUrls: ['./newss.component.css']
})
export class NewssComponent implements OnInit {

  public list: any[];

  private headers = new Headers({'Content-Type': 'application/josn'});

  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
  }

  requestData () {
    const that = this;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.http.get(url).subscribe((data) => {
      // console.log(JSON.parse(data['_body']));
      that.list = JSON.parse(data['_body']).result;
      console.log(that.list);
    }, (error) => {
      console.log(error);
    });
  }

  requestJsonpData () {
    const that = this;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK';
    this.jsonp.get(url).subscribe((data) => {
      console.log(data);
      that.list = data['_body'].result;
      console.log(that.list);
    }, (error) => {
      console.log(error);
    });
  }

  postData () {
    // 1. 导入 Headers
    // 2. private headers = new Headers({'Content-Type': 'application/json'});
    // 3. this.http.post(url, JSON.stringify(data), {headers: this.headers}).subscribe(() => {}, () => {});
    const url = 'http://127.0.0.1:3000/dologin';
    this.http
    .post(
      url,
      JSON.stringify({}),
      {headers: this.headers}
    )
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
