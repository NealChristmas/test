import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-m-select',
  templateUrl: './m-select.component.html',
  styleUrls: ['./m-select.component.scss']
})
export class MSelectComponent implements OnInit {
  @Input() attr
  constructor() { }

  ngOnInit() {
    this.attr.value = this.attr.options[0].value
  }

}
