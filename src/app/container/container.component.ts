import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { ReactiveDirective } from "../reactive.directive"
import { ReactiveContainerService } from "../reactive-container.service"
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { CmpJsonComponent } from "../cmp-json/cmp-json.component"
import { CmpPreviewComponent } from "../cmp-preview/cmp-preview.component"
import { element } from 'protractor';
// import { AdComponent } from './ad.component';

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
    private modalService: NzModalService
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
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cmp.component);
    const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    const componentRef =  viewContainerRef.createComponent(componentFactory);
    this.reactiveContainerService.cmpsInstance.push(componentRef.instance)
    //@ts-ignore
    componentRef.instance.data = {
      id:cmp.id,
      attr:cmp.attr,
      //@ts-ignore
      viewRef:componentRef._viewRef
    }
    this.addMask()
    console.log("cmpsInstance",this.reactiveContainerService.cmpsInstance)
    // console.log("componentRef.instance",componentRef.instance)
  }
  deleteComponent(cmpInstance){
    let viewIndex =  this.viewContainerRef.indexOf(cmpInstance.data.viewRef)
    this.viewContainerRef.remove(viewIndex)

    this.reactiveContainerService.cmpsInstance.forEach((instance,index,self)=>{
      if(instance.data.id == cmpInstance.data.id){
        self.splice(index,1)
      }
    })
  }
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
  createPreviewModal():void{
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CmpPreviewComponent,
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
  addMask(){
    let elements = document.querySelectorAll("nz-button")
    let tag = document.createElement("div");
    tag.innerHTML = "zhuchunjie"
    debugger
    Array.from(elements).forEach(item=>{
      item.appendChild(tag)
    })
  }
}
