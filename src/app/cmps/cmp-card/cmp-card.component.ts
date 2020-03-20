import { Component, OnInit , EventEmitter ,Output } from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
@Component({
  selector: 'app-cmp-card',
  templateUrl: './cmp-card.component.html',
  styleUrls: ['./cmp-card.component.scss']
})
export class CmpCardComponent implements OnInit {
  @Output() choosed: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  public isActive:boolean = false
  constructor(public reactiveContainerService:ReactiveContainerService) { }

  ngOnInit() {
  }
  onCardChoose(e:any){
    this.choosed.emit()
    this.isActive = true
  }
  deleteItem(){
    console.log("this",this)
    this.delete.emit()
  }

}
