import { Injectable , Output , EventEmitter , ViewChild} from '@angular/core';
import { CmpItem } from "./cmp-item"
import cmpConfig from "./cmps/cmps.config"

@Injectable({
  providedIn: 'root'
})
export class ReactiveContainerService {
  // cmps:Array<any> = [new CmpItem(MButtonComponent),new CmpItem(MInputComponent)]
  lastDropCmp:any
  lastDropCmpConfig:any
  cmpsInstance:Array<any> = []
  selectCmpInstance:any
  @Output() addcmp: EventEmitter<any> = new EventEmitter();
  @Output() deletecmp: EventEmitter<any> = new EventEmitter();
  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Output() createJson: EventEmitter<any> = new EventEmitter();
  constructor(
    // public cmpEditComponent:CmpEditComponent
  ) { }
  push(dropevent){
    this.lastDropCmpConfig = dropevent.data
    this.lastDropCmp = new CmpItem(this.getClass(dropevent),dropevent.data.type+"_"+new Date().getTime())
    this.notifyCmpContainer()
  }
  getClass(dropevent){
    //@ts-ignore
    let res = cmpConfig.filter(item=>{
      return item.content.type == dropevent.data.type
    })
    return res[0].content.component
  }
  //通知container添加动态组件
  notifyCmpContainer(){
    let cmp = Object.assign(this.lastDropCmp,this.lastDropCmpConfig)
    this.addcmp.emit(cmp);
  }
  //通知container删除子组件
  deleteComponent(cmpInstance){
    this.deletecmp.emit(cmpInstance)
  }
  selectComponet(instance){
    //通知编辑组件更新输入属性
    this.selectCmpInstance = instance
    this.updateData.emit(instance)
  //清除所有子组件的选中状态
  // removeActive(){
  //   this.cmpsInstance.forEach(instance=>{
  //     instance.is
  //   })
  }
  collectInstanceConfiguration(){
    let res = this.cmpsInstance.map(instance=>{
      return {
        id:instance.data.id,
        attr:instance.data.attr
      }
    })
    // this.createJson.emit(res)
    return res
  }
  // notifyJsonCmp(){
  //   this.createJson.emit
  // }
}
