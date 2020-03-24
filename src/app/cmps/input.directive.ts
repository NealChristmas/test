import {Directive, Input, ElementRef, Renderer2,SimpleChanges} from "@angular/core";
import { CmpsService } from "./cmps.service"
@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  @Input('appInput')
  attr?: string; // 输入属性，用于设置元素的背景颜色
  constructor(
    private elementRef: ElementRef,
    private rd:Renderer2,
    private cmpsService:CmpsService
  ) { 
    this.cmpsService.updateInput.subscribe(()=>{
      this.updateData()
    })
  }
  ngOnInit(): void {
    this.updateData()
  }
  updateData(){
    //@ts-ignore
    if(this.attr.configuable){
      this.rd.removeAttribute(this.elementRef.nativeElement,"disabled")
     }else{
       this.rd.setAttribute(this.elementRef.nativeElement,"disabled",null)
     }
  }
}
