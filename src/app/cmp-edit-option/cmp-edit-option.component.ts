import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges
} from "@angular/core";
import { NzInputDirective } from "ng-zorro-antd/input";
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SelectOption } from "../interfaces"
@Component({
  selector: "app-cmp-edit-option",
  templateUrl: "./cmp-edit-option.component.html",
  styleUrls: ["./cmp-edit-option.component.scss"]
})
export class CmpEditOptionComponent implements OnInit {
  editId: string | null;
  i:number = -1
  editCache: { [key: string]: { edit: boolean; data: SelectOption } } = {};
  listOfData: SelectOption[] = []
  @Input() attr;
  @ViewChild(NzInputDirective, { static: false, read: ElementRef })
  inputElement: ElementRef;
  constructor(private modal:NzModalRef){}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }
  

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    let res = Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
    this.attr.options = this.listOfData
  }
  updateEditCache(): void {

    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  addRow(): void {
    this.i++
    this.listOfData = [
      ...this.listOfData,
      {
        id:this.i,
        label: this.listOfData[0].label,
        value: this.listOfData[0].value,
      }
    ];
    this.updateEditCache()

  }

 

  ngOnInit(): void {
    this.listOfData = this.attr.options.map((item,index)=>{
      this.i++
      return {
        id:this.i,
        ...item
      }
    })
    this.updateEditCache();
    console.log(this.editCache)
  }

  destroyModal(): void {
    this.modal.destroy();
  }

}
