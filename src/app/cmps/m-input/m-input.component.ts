import { Component, OnInit , Input ,ElementRef,ViewChild, INJECTOR ,Renderer2,SimpleChanges } from '@angular/core';
import { CmpsService } from "../cmps.service"
@Component({
  selector: 'app-m-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.scss']
})
export class MInputComponent implements OnInit {
  @Input() attr:Object
  @ViewChild("Input",{read:ElementRef,static:false})
  input:ElementRef
  constructor(
    private rd:Renderer2,
    private cmpsService:CmpsService
    ) {
      // this.cmpsService.updateInput.subscribe(()=>{
      //   this.updateData()
      // })
   }

  ngOnInit() {
  }
  // updateData(){
  //   //@ts-ignore
  //   if(this.attr.configuable){
  //     this.rd.removeAttribute(this.input.nativeElement,"disabled")
  //    }else{
  //      this.rd.setAttribute(this.input.nativeElement,"disabled",null)
  //    }
  // }
}
