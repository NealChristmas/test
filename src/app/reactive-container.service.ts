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
  cardsInstances:Array<any> = []
  cmpJsonConfig:Array<any> = []
  selectCmpInstance:any
  @Output() addcmp: EventEmitter<any> = new EventEmitter();
  @Output() deletecmp: EventEmitter<any> = new EventEmitter();
  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Output() createJson: EventEmitter<any> = new EventEmitter();
  constructor(
    // public cmpEditComponent:CmpEditComponent
  ) { }
  getClass(dropevent){
    //@ts-ignore
    let res = cmpConfig.filter(item=>{
      return item.content.type == dropevent.data.type
    })
    return res[0].content.component
  }
  //通知container添加动态组件
  notifyCmpContainer(dropevent){
    this.lastDropCmpConfig = dropevent.data
    this.lastDropCmp = new CmpItem(this.getClass(dropevent),dropevent.data.type+"_"+new Date().getTime())
    let cmp = Object.assign(this.lastDropCmp,this.lastDropCmpConfig)
    this.addcmp.emit(cmp);
    this.collectInstanceConfiguration()
  }
  //通知container删除子组件
  deleteComponent(cmpInstance){
    this.deletecmp.emit(cmpInstance)
  }
  selectComponet(attr){
    //通知编辑组件更新输入属性
    // this.selectCmpInstance = instance
    this.updateData.emit(attr)
  //清除所有子组件的选中状态
  // removeActive(){
  //   this.cardsInstances.forEach(instance=>{
  //     instance.is
  //   })
  }
  pushToCmpJsonConfig(config){
    this.cmpJsonConfig.push(config)
  }
  collectInstanceConfiguration(){
    let res = this.cardsInstances.map(instance=>{
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
