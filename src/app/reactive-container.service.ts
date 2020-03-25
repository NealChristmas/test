import { Injectable, Output, EventEmitter } from '@angular/core';
import { CmpItem } from "./cmp-item"
import cmpConfig from "./cmps/cmps.config"
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveContainerService {
  lastDropCmp: any
  lastDropCmpConfig: any
  cardsInstances: Array<any> = [] 
  cmpJsonConfig: Array<any> = [] 
  selectCmpInstance: any
  @Output() addcmp: EventEmitter<any> = new EventEmitter();
  @Output() reload: EventEmitter<any> = new EventEmitter();
  @Output() deletecmp: EventEmitter<any> = new EventEmitter();
  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Output() createJson: EventEmitter<any> = new EventEmitter();
  constructor(
  ) { }

  //通知container添加动态组件
  notifyCmpContainer(dropevent) {
    this.lastDropCmpConfig = dropevent.data
    this.lastDropCmp = new CmpItem(this.getClass(dropevent), dropevent.data.type + "_" + new Date().getTime())
    let cmp = Object.assign(this.lastDropCmp, this.lastDropCmpConfig,{
      attr: {
        id: this.lastDropCmp.id,
        type: this.lastDropCmpConfig.type,
        ...this.lastDropCmpConfig.attr
      },
    })
    this.addcmp.emit(cmp);
    this.collectInstanceConfiguration()
  }
  // 根据cmpConfig遍历获取class
  getClass(dropevent) {
    //@ts-ignore
    let res = cmpConfig.filter(item => {
      return item.content.type == dropevent.data.type
    })
    return res[0].content. cmpClass
  }
  //通知container删除子组件
  deleteComponent(cmpInstance) {
    this.deletecmp.emit(cmpInstance)
  }
  selectComponet(attr) {
    this.updateData.emit(attr)
  }
  pushToCmpJsonConfig(config) {
    this.cmpJsonConfig.push(config)
  }
  reLoadContainer(configs){
    this.reload.emit()
    this.cmpJsonConfig = configs
    setTimeout(()=>{
      this.cmpJsonConfig.forEach(config=>{
        this.addcmp.emit(config)
      }) 
    })
    
  }
  collectInstanceConfiguration = () => this.cmpJsonConfig
}
