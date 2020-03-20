import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ReactiveDirective } from "../reactive.directive"
import { ReactiveContainerService } from "../reactive-container.service"
import  cmpConfig  from "../cmps/cmps.config"
import { element } from 'protractor';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-cmp-preview',
  templateUrl: './cmp-preview.component.html',
  styleUrls: ['./cmp-preview.component.scss']
})
export class CmpPreviewComponent implements OnInit {
  @ViewChild(ReactiveDirective, {static: true}) cmpReactive: ReactiveDirective;
  @Input() title: string;
  @Input() subtitle: string;
  viewContainerRef:any
  cmp
  cmpsJson:any = [
    {
      id: "mat-button_1584695321603",
      type:"mat-button",
      attr: {
        width: "100px",
        title: "这是一个按钮"
      }
    },
    {
      id: "mat-input_1584695322314",
      type:"mat-input",
      attr: {
        width: "100px",
        title: "你最喜欢的食物",
        placeholder: "默认placeholder"
      }
    },
    {
      id: "mat-slide_1584695323578",
      type:"mat-slide",
      attr: {
        width: "100px"
      }
    }
  ]
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private reactiveContainerService: ReactiveContainerService,
    private modal: NzModalRef,
  ) { }

  ngOnInit() {
    let cmps = this.getCmps()
    cmps.forEach(cmp=>{
      this.loadComponent(cmp)
    })
  }
  loadComponent(cmp) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cmp.component);
    const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    //@ts-ignore
    componentRef.instance.data = {
      attr:cmp.attr
    }
  }
  getCmps(){
    let res = []
    let cmpItem
    this.cmpsJson.forEach((item,index,self)=>{
      cmpConfig.forEach(element=>{
        if(item.type === element.content.type){
          cmpItem = item
          
          cmpItem.component = element.content.component
          res.push(cmpItem)
        }
      })
    })
    return res
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
