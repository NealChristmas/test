import { Component, OnInit ,Input } from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
@Component({
  selector: 'app-m-slide',
  templateUrl: './m-slide.component.html',
  styleUrls: ['./m-slide.component.scss']
})
export class MSlideComponent implements OnInit {
  @Input() data: any;
  constructor( public reactiveContainerService:ReactiveContainerService ) { }

  ngOnInit() {
  }
  update(attr){
    console.log("attr",attr)
  }
  delete(){
    this.reactiveContainerService.deleteComponent(this)
   }
}
