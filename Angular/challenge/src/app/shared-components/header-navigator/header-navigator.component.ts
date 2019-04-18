import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigator',
  templateUrl: './header-navigator.component.html',
  styleUrls: ['./header-navigator.component.css']
})
export class HeaderNavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  notify(){
    alert('Notification service not available')
  }

}
