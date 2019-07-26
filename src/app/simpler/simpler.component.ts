import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpler',
  templateUrl: './simpler.component.html',
  styleUrls: ['./simpler.component.sass']
})
export class SimplerComponent implements OnInit {
  title = 'somethign';

  constructor() { }

  ngOnInit() {
  }

  getSomething() {
    return this.title;
  }

}
