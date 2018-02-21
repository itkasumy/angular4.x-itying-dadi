import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public username: any = '';

  public list = [];

  constructor() { }

  ngOnInit() {
  }

  addData (e) {
    if (e.keyCode === 13) {
      const obj = {
        username: this.username,
        status: 1
      };
      this.list.push(obj);
      this.username = '';
    }
    // alert(this.username);
    // this.list.push(this.username);
  }

  deleteData (key) {
    // alert(key);
    this.list.splice(key, 1);
  }

  changeData (key) {
    this.list[key].status = 2;
  }

}
