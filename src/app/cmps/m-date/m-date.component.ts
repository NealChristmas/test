import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-m-date',
  templateUrl: './m-date.component.html',
  styleUrls: ['./m-date.component.scss']
})
export class MDateComponent implements OnInit {
  @Input() attr
  constructor() { }

  ngOnInit() {
  }

}
