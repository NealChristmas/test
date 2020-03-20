import { Component, OnInit , Input } from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
@Component({
  selector: 'app-m-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent implements OnInit {
  @Input() data: any;
  constructor(public reactiveContainerService:ReactiveContainerService) { }

  ngOnInit() {
  }
  selected(attr){
    this.reactiveContainerService.selectComponet(this)
  }
  delete(){
    this.reactiveContainerService.deleteComponent(this)
  }
}
