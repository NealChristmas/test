import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ReactiveDirective } from "../reactive.directive"
import { ReactiveContainerService } from "../reactive-container.service"
import { Subscription } from 'rxjs';
import { CmpCardComponent } from "../cmps/cmp-card/cmp-card.component"
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { CmpJsonComponent } from "../cmp-json/cmp-json.component"
import { CmpPreviewComponent } from "../cmp-preview/cmp-preview.component"
import { CmpInputAreaComponent } from "../cmp-input-area/cmp-input-area.component"
@Component({
  selector: 'cmp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  cardsInstances: any[] = [ ];
  subs = new Subscription();
  currentAdIndex = -1;
  @ViewChild(ReactiveDirective, { static: true }) cmpReactive: ReactiveDirective;
  interval: any;
  viewContainerRef: any
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public reactiveContainerService: ReactiveContainerService,
    private modalService: NzModalService,
    private dragulaService: DragulaService,
  ) {
    this.cardsInstances = this.reactiveContainerService.cardsInstances
    this.subs.add(this.dragulaService.dropModel("CARD")
      .subscribe((item) => {

      })
    );
  }

  ngOnInit() {
    this.reactiveContainerService.addcmp.subscribe((cmp) => {
      this.loadComponent(cmp)
    })
    this.reactiveContainerService.deletecmp.subscribe((viewRef) => {
      this.deleteComponent(viewRef)
    })

  }

  loadComponent(cmp) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CmpCardComponent);
    const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    //@ts-ignore
    componentRef.instance.data = {
      id: cmp.id,
      type: cmp.type,
      attr: {
        id: cmp.id,
        type: cmp.type,
        ...cmp.attr
      },
      //@ts-ignore
      viewRef: componentRef._viewRef,
      cmpClass: cmp.component
    }
    
    this.reactiveContainerService.cardsInstances.push(componentRef.instance)
  }
  //删除组件
  deleteComponent(cmpData) {
    let viewIndex = this.viewContainerRef.indexOf(cmpData.viewRef)
    this.viewContainerRef.remove(viewIndex)
    this.reactiveContainerService.cardsInstances.forEach((instance, index, self) => {
      if (instance.data.id === cmpData.id) {
        self.splice(index, 1)
      }
    })
    this.reactiveContainerService.cmpJsonConfig.forEach((config,index,self)=>{
      if(config.attr.id === cmpData.id){
        self.splice(index, 1)
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
  createPreviewModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CmpPreviewComponent,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec',
        JsonConfig: this.reactiveContainerService.cmpJsonConfig
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
  //生成json输入区域
  createInputModal(): void {
    const modal = this.modalService.create({
      nzTitle: '输入json',
      nzContent: CmpInputAreaComponent,
      nzComponentParams: {
       
       jsonData:""
      },
      nzFooter: [
        {
          label: '生成预览',
          onClick: componentInstance => {
            componentInstance!.createPreviewModal()
          }
        }
      ]
    });
  }
  
  handleClick(e: Event) {
    e.target
  }
}
