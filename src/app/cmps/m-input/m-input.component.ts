import { Component, OnInit , Input ,ElementRef,ViewChild, INJECTOR ,Renderer2 } from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
@Component({
  selector: 'app-m-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent implements OnInit {
  @Input() attr:Object
  @ViewChild("Input",{read:ElementRef,static:false})
  input:ElementRef
  constructor(private rd:Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.input)
  }
  ngDoCheck(){
   
    if(this.input){
       //@ts-ignore
      if(this.attr.configuable){

        this.rd.removeAttribute(this.input.nativeElement,"disabled")
       }else{
         this.rd.setAttribute(this.input.nativeElement,"disabled",null)
       }
    }
   
   
  }
}
