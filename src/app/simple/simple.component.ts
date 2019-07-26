import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.sass']
})
export class SimpleComponent implements OnInit {
  title = 'Supa Simple Component';

  constructor() { }

  ngOnInit() {}

  getTitle() {
    return this.title;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
