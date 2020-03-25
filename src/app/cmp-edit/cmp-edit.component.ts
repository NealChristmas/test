import { Component, OnInit, Input ,ElementRef,ViewChild, DebugElement } from '@angular/core';
import { ReactiveContainerService } from "../reactive-container.service"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CmpsService } from "../cmps/cmps.service"
import { EventEmitter, element } from 'protractor';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CmpEditOptionComponent } from "../cmp-edit-option/cmp-edit-option.component";
@Component({
  selector: 'app-cmp-edit',
  templateUrl: './cmp-edit.component.html',
  styleUrls: ['./cmp-edit.component.scss']
})
export class CmpEditComponent implements OnInit {
  attr: any
  validateForm: FormGroup;
  public selectDataSource = "json"
  jsonDataSource:any
  showJsonSelect:boolean = true
  public test = [
    {
      label:"学校",
      value:"school",
      data:[
        {
          label:"age",
          value:35
        },
        {
          label:"age",
          value:33
        },
        {
          label:"age",
          value:33
        }
      ]
    },
    {
      label:"学生",
      value:"student",
      data:[
        {
          label:"张三",
          value:33
        },
        {
          label:"李四",
          value:33
        },
        {
          label:"王五",
          value:33
        }
      ]
    }
  ]
  
  // public testJson = {
  //   school:[
  //         {
  //           label:"age",
  //           value:33
  //         },
  //         {
  //           label:"age",
  //           value:33
  //         },
  //         {
  //           label:"age",
  //           value:33
  //         }
  //       ]
  //     ,
  //     teacher:[
  //       {
  //         label:"张三",
  //         value:33
  //       },
  //       {
  //         label:"李四",
  //         value:33
  //       },
  //       {
  //         label:"王五",
  //         value:33
  //       }
  //     ]
  // }
  constructor(
    public reactiveContainerService: ReactiveContainerService,
    private fb: FormBuilder,
    public cmpsService: CmpsService,
    private modalService: NzModalService,

    // private modal: NzModalRef,
    // private modalService: NzModalService,
  ) {
    this.reactiveContainerService.updateData.subscribe(attr => {
      this.updateData(attr)
    })
    this.reactiveContainerService.addcmp.subscribe(cmp=>{
      this.updateData(cmp.attr)
    })
    
    
  }

  ngOnInit() {
    if(this.attr&&!this.attr.options){

      this.jsonDataSource = this.test[0].data
    }
    this.validateForm = this.fb.group({
      agree: [false],
      id: [],
      title: [],
      value: [],
      lineProportion: [],
      infotype: [],
      linkagetype: [],
      inputConfiguable: [],
      dateConfiguable : [],
      // selectDataSource:[this.selectDataSource],
    });

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
  //更新组件属性
  updateData(attr) {
    this.attr = attr
  }
  //数据来源发生变化时调用
  changeSelectDataSource(e:string){
    if(e == "custom"){
      this.showJsonSelect = false
      this.createEditSelectModal()
     
    }else if(e == "json"){
      this.showJsonSelect = true
    }
  }
  //selectJson发生变化时调用
  changeJsonData(e){
    if(e){
      this.attr.options = this.jsonDataSource
    }
  }
  //生成select编辑框
  createEditSelectModal(e?): void {
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: CmpEditOptionComponent,
      nzComponentParams: {
       attr:this.attr
      },
      nzFooter: [
        {
          label: '确定',
          onClick: componentInstance => {
            componentInstance.destroyModal()
          }
        }
      ]
    });
    
    
  }
}
