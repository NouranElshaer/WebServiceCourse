import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styles: [
  ]
})
export class UseritemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user:any;
}
