import { Injectable, ComponentFactoryResolver, Injector, Inject, TemplateRef, Type ,ViewContainerRef,ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CmpCardComponent } from "./cmp-card/cmp-card.component"
export type Content<T> = Type<T> | string | TemplateRef<T> ;

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // @ViewChild(CmpCardComponent, { read: ViewContainerRef , static:true}) container: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }
  createCard(content) {
    //@ts-ignore
    const componentFactory = this.resolver.resolveComponentFactory(content);
    const cardContainer = this.resolver.resolveComponentFactory(CmpCardComponent)
    const viewContainerRef = cardContainer.create(this.injector)
    //@ts-ignore
    // let res = viewContainerRef.createComponent(componentFactory)
    console.log("viewContainerRef",viewContainerRef)
    // const viewContainerRef = this.viewContainerRef = this.cmpReactive.viewContainerRef;
    // const componentRef =  viewContainerRef.createComponent(componentFactory);
    // const containerFactory = this.resolver.resolveComponentFactory(CmpCardComponent);
    // const ngContent = this.resolveNgContent(content);
    // const componentRef = containerFactory.create(this.injector, ngContent);

    // componentRef.hostView.detectChanges();
    // return componentRef
    // const { nativeElement } = componentRef.location;
  }
  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      console.log(viewRef)
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [viewRef.rootNodes];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement], [this.document.createTextNode('Second ng-content')]];
  }
}
