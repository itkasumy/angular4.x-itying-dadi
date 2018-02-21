import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  // public storage = new StorageService(); // 可以引入服务，但是官方不推荐这样使用

  public username: any = '';

  public list = [];

  // 依赖注入服务
  constructor(private storage: StorageService) {
    // console.log(this.storage);
  }

  ngOnInit() {
    const todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.list = this.storage.getItem('todolist');
    }
  }

  addData(e) {
    const obj = {
      username: this.username,
      status: 1
    };

    if (e.keyCode === 13) {
      const todolist = this.storage.getItem('todolist');
      if (todolist) {
        todolist.push(obj);
        this.storage.setItem('todolist', todolist);
      } else {
        const arr = [];
        arr.push(obj);
        this.storage.setItem('todolist', arr);
      }
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

  changeData (key, status) {
    this.list[key].status = status;
    this.storage.setItem('todolist', this.list);
  }

}
