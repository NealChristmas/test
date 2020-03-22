import { Component, OnInit , EventEmitter ,Output,ViewChild ,ComponentFactoryResolver,Input} from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
import { CardDirective } from "../card.directive"
import { MButtonComponent } from "../m-button/m-button.component"
@Component({
  selector: 'app-cmp-card',
  templateUrl: './cmp-card.component.html',
  styleUrls: ['./cmp-card.component.scss']
})
export class CmpCardComponent implements OnInit {
  @Output() choosed: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @ViewChild(CardDirective, {static: true}) cardReactive: CardDirective;
  @Input() data:any
  public isActive:boolean = false
  public viewContainerRef:any
  constructor(
    public reactiveContainerService:ReactiveContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    ) { }

  ngOnInit() {
    this.loadComponent()
  }
  onCardChoose(e:any){

    console.log("cmps",new this.data())
    return 
    this.choosed.emit()
    this.isActive = true
  }
  deleteItem(){
    console.log("this",this)
    this.delete.emit()
  }
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data);
    const viewContainerRef = this.viewContainerRef = this.cardReactive.viewContainerRef;
    console.log("viewContainerRef1",viewContainerRef)
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    // console.log("componentRef.instance",componentRef.instance)
  }

}
