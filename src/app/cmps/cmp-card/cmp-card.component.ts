import { Component, OnInit , EventEmitter ,Output,ViewChild ,ComponentFactoryResolver,Input} from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
import { CardDirective } from "../card.directive"
import { MButtonComponent } from "../m-button/m-button.component"
import { DndDropEvent } from 'ngx-drag-drop';
@Component({
  selector: 'app-cmp-card',
  templateUrl: './cmp-card.component.html',
  styleUrls: ['./cmp-card.component.scss']
})
export class CmpCardComponent implements OnInit {
  @Output() choosed: EventEmitter<any> = new EventEmitter();
  @ViewChild(CardDirective, {static: true}) cardReactive: CardDirective;
  @Input() data:any
  public isActive:boolean = false
  public viewContainerRef:any
  
  draggable={
    content: {
      type:"mat-button",
      component:MButtonComponent,
      attr:{
        width:"100px",
        title:"这是一个按钮"
      }
    },
    effectAllowed: "move",
    disable: false,
    handle: false,
    title:"按钮"
  }
  constructor(
    public reactiveContainerService:ReactiveContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    ) { }

  ngOnInit() {
    this.loadComponent()
  }
  onCardChoose(e:any){
    this.reactiveContainerService.selectComponet(this.data.attr)
    return 
    this.choosed.emit()
    this.isActive = true
  }
  deleteItem(){
    this.reactiveContainerService.deleteComponent(this.data)
  }
  loadComponent() {
    console.log(this.data)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.cmpClass);
    const viewContainerRef = this.viewContainerRef = this.cardReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    
    //@ts-ignore
    componentRef.instance.attr = this.data.attr
    let config = this.data
    delete config.id
    delete config.viewRef
    this.reactiveContainerService.pushToCmpJsonConfig(config)
  }
  onDragStart( event:DragEvent ) {

  
  }

  onDragged( $event:DragEvent, effect:string ) {

  
  }

  onDragEnd( event:DragEvent ) {

   
  }

  onDrop( event:DndDropEvent ) {
   
  }
  onDragover(e:any){
    console.log("dragover",e)
  }
}
