import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.showModal = !this.showModal;
  }
}
