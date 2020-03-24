import { Component, OnInit, Input, ElementRef, ViewChild, INJECTOR, Renderer2, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-m-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent implements OnInit {
  @Input() attr: Object
  constructor(
  ) {
  }

  ngOnInit() {
  }
}