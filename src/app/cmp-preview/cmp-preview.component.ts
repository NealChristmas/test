import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy ,Renderer2} from '@angular/core';
import { ReactiveDirective } from "../reactive.directive"
import { ReactiveContainerService } from "../reactive-container.service"
import  cmpConfig  from "../cmps/cmps.config"
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal'
@Component({
  selector: 'app-cmp-preview',
  templateUrl: './cmp-preview.component.html',
  styleUrls: ['./cmp-preview.component.scss']
})
export class CmpPreviewComponent implements OnInit {
  @ViewChild(ReactiveDirective, {static: true}) cmpReactive: ReactiveDirective;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() JsonConfig:any;
  viewContainerRef:any
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modal: NzModalRef,
    private rd:Renderer2
  ) { }

  ngOnInit() {
    this.getConfig().forEach(config=>{
      this.loadComponent(config)
    })
  }
  loadComponent(config) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(config.cmpClass);
    const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    this.rd.addClass(componentRef.location.nativeElement,"cmp-item")
    this.rd.setStyle(componentRef.location.nativeElement,"width",config.attr.lineProportion)
    //@ts-ignore
    componentRef.instance.attr = config.attr
  }
  getConfig(){

    let res = []
    if(this.JsonConfig){
      let cmpItem
      this.JsonConfig.forEach((item,index,self)=>{
        cmpConfig.forEach(element=>{
          if(item.type === element.content.type){
            cmpItem = item 
            if(!cmpItem.cmpClass){
              cmpItem.cmpClass = element.content.component
            }
            res.push(cmpItem)
          }
        })
      })
    }
    return res
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
