import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  items = [
    {
      title: 'Title 1',
      content: 'content for title 1',
    },
    {
      title: 'Title 2',
      content: 'content for title 2',
    },
    {
      title: 'Title 3',
      content: 'content for title 3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.showModal = !this.showModal;
  }
}
