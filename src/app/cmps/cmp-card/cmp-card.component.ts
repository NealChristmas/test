import { Component, OnInit , EventEmitter ,Output,ViewChild ,ComponentFactoryResolver,Input,Renderer2} from '@angular/core';
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
  @ViewChild(CardDirective, {static: true}) cardReactive: CardDirective;
  @Input() data:any
  public isActive:boolean = false
  public viewContainerRef:any
  public width:string
  // public attr:any
  constructor(
    public reactiveContainerService:ReactiveContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private rd:Renderer2
    ) { }

  ngOnInit() {
    this.loadComponent()
  }
  onCardChoose(e:any){
    this.reactiveContainerService.selectComponet(this.data.attr)
  }
  deleteItem(){
    this.reactiveContainerService.deleteComponent(this.data)
  }
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.cmpClass);
    const viewContainerRef = this.viewContainerRef = this.cardReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    let nativeElement = this.viewContainerRef.element.nativeElement
    let parentNode = this.rd.parentNode(this.rd.parentNode(nativeElement))
    this.rd.setStyle(parentNode,"width",this.data.attr.lineProportion)
    let _attr = Object.assign({},this.data.attr)
    this.width = this.data.attr.lineProportion
    let that = this
    Object.defineProperties(this.data.attr,{
      "lineProportion":{
        get(){
          return _attr.lineProportion
        },
        set(value){
          _attr.lineProportion = value
          that.rd.setStyle(parentNode,"width",value)
          // that.width = value
          // this.rd.setStyle(parentNode,"width",this.data.attr.lineProportion)
        }
      }
     
    })
    console.log(this.data.attr.lineProportion)
    //@ts-ignore
    componentRef.instance.attr = this.data.attr
    let config = Object.assign({},this.data)
    delete config.id
    delete config.viewRef
    this.reactiveContainerService.pushToCmpJsonConfig(config)
  }
}
