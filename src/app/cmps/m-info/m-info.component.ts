import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-info',
  templateUrl: './m-info.component.html',
  styleUrls: ['./m-info.component.scss']
})
export class MInfoComponent implements OnInit {
  public userdata = {
    time:"2020-3-25",
    company:"gangda",
    usertype:"frontend developer"
  }
  constructor() { }

  ngOnInit() {
  }

}
