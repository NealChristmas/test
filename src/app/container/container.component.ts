import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { ReactiveDirective } from "../reactive.directive"
import { ReactiveContainerService } from "../reactive-container.service"
import { CardService } from "../cmps/card.service"

import { MButtonComponent} from "../cmps/m-button/m-button.component"
import { CmpCardComponent } from "../cmps/cmp-card/cmp-card.component"
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { CmpJsonComponent } from "../cmp-json/cmp-json.component"
import { CmpPreviewComponent } from "../cmp-preview/cmp-preview.component"
import { element } from 'protractor';
// import { AdComponent } from './ad.component';
// import * as $ from 'jquery';
@Component({
  selector: 'cmp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  // cmps: any[] = [ new CmpItem(MButtonComponent), new CmpItem(MInputComponent)];
  currentAdIndex = -1;
  @ViewChild(ReactiveDirective, {static: true}) cmpReactive: ReactiveDirective;
  interval: any;
  cmps:Array<any> = []
  viewContainerRef:any
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private reactiveContainerService: ReactiveContainerService,
    private modalService: NzModalService,
    private CardService: CardService
    ) {
      
   }

  ngOnInit() {
    this.reactiveContainerService.addcmp.subscribe((cmp)=>{
      this.loadComponent(cmp)
    })
    this.reactiveContainerService.deletecmp.subscribe((viewRef)=>{
      this.deleteComponent(viewRef)
    })

  }

  loadComponent(cmp) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CmpCardComponent);
    const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    //@ts-ignore
    componentRef.instance.data = {
      id:cmp.id,
      type:cmp.type,
      attr:{
        id:cmp.id,
        ...cmp.attr
      },
      //@ts-ignore
      viewRef:componentRef._viewRef,
      cmpClass:cmp.component
    }
    this.reactiveContainerService.cardsInstances.push(componentRef.instance)
  }
  deleteComponent(cmpData){
    let viewIndex =  this.viewContainerRef.indexOf(cmpData.viewRef)
    this.viewContainerRef.remove(viewIndex)

    this.reactiveContainerService.cardsInstances.forEach((instance,index,self)=>{
      if(instance.data.id == cmpData.id){
        self.splice(index,1)
      }
    })
  }
  //生成json预览
  createComponentModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CmpJsonComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
  }
  //生成组件预览
  createPreviewModal():void{
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CmpPreviewComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec',
        JsonConfig:this.reactiveContainerService.cmpJsonConfig
      },
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
  }
  // addMask(){
  //   let elements = document.querySelectorAll("[reactive_cmp]")
  //   Array.from(elements).forEach(item=>{
  //     if(!$(item).parent().hasClass("cmp-card")){
  //       $(item)
  //         .wrap("<div class='cmp-card'></div>")
  //         .parent()
  //         .append(`<div class="mask" ><a href="#javascript:;" >删除</a></div>`)
  //     }   
  //   })
  // }
  createNode(txt) {
      
      const template = `<div class='child'>${txt}</div>`;
      let tempNode = document.createElement('div');
      tempNode.innerHTML = template;
      return tempNode.firstChild;
  }
  handleClick(e:Event){
    e.target
    console.log(e)
  }
}
