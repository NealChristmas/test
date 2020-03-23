import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { DndDragImageOffsetFunction } from "ngx-drag-drop";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MButtonComponent } from "./cmps/m-button/m-button.component"
import { MInputComponent } from "./cmps/m-input/m-input.component"
import { ReactiveContainerService } from "./reactive-container.service"
import { DragulaService } from 'ng2-dragula';
import cmpConfig  from "./cmps/cmps.config"
import { Subscription } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  draggables = cmpConfig
  subs = new Subscription();
  public cmpsJson:any
  public dropzoneEnabled:boolean = true;
  public lastDropEvent:DndDropEvent | null = null;

  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;
  constructor( 
    private snackBarService:MatSnackBar,
    private reactiveContainerService:ReactiveContainerService ,
    private dragulaService: DragulaService,
    ) {
  }
  ngOnInit(): void {
  }
  dragImageOffsetRight:DndDragImageOffsetFunction = ( event:DragEvent, dragImage:Element ) => {

    const dragImageComputedStyle = window.getComputedStyle( dragImage );
    const paddingTop = parseFloat( dragImageComputedStyle.paddingTop ) || 0;
    const paddingLeft = parseFloat( dragImageComputedStyle.paddingLeft ) || 0;
    const borderTop = parseFloat( dragImageComputedStyle.borderTopWidth ) || 0;
    const borderLeft = parseFloat( dragImageComputedStyle.borderLeftWidth ) || 0;

    const x = dragImage.clientWidth - (event.offsetX + paddingLeft + borderLeft);
    return {
      x: x,
      y: event.offsetY + paddingTop + borderTop
    };
  };
  parseElement(e){
    let directives =e.directives.join(" ")

    let str = `<${e.tagName} ${directives}>${e.content}</${e.tagName}> `
    return str
  }
  onDragStart( event:DragEvent ) {

    this.lastDropEvent = null;

    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open( "Drag started!", undefined, {duration: 2000} );
  }

  onDragged( $event:DragEvent, effect:string ) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
  }

  onDragEnd( event:DragEvent ) {

    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open( this.currentDragEffectMsg || `Drag ended!`, undefined, {duration: 2000} );
  }

  onDrop( event:DndDropEvent ) {
    this.lastDropEvent = event;
    this.reactiveContainerService.notifyCmpContainer(this.lastDropEvent)
  }
  onDragover(e:any){
  }
}
