import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CmpPreviewComponent } from "../cmp-preview/cmp-preview.component"
import { ReactiveContainerService } from "../reactive-container.service"
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-cmp-input-area',
  templateUrl: './cmp-input-area.component.html',
  styleUrls: ['./cmp-input-area.component.scss']
})
export class CmpInputAreaComponent implements OnInit {
  jsonData: string = ""
  
  constructor(
    private modal: NzModalRef,
    private modalService: NzModalService,
    private reactiveContainerService: ReactiveContainerService,
    private snackBarService:MatSnackBar,
  ) { }

  ngOnInit() {
  }

  createPreviewModal(): void {
    let parsedJsonData
    try {
      parsedJsonData = JSON.parse(this.jsonData)
      const modal = this.modalService.create({
        nzTitle: 'Modal Title',
        nzContent: CmpPreviewComponent,
        nzComponentParams: {
          title: 'title in component',
          subtitle: 'component sub title，will be changed after 2 sec',
          JsonConfig:parsedJsonData
        },
        nzFooter: [
          {
            label: 'change component title from outside',
            onClick: componentInstance => {
              componentInstance!.title = 'title in inner component is changed';
            }
          }
        ]
      });
    } catch (error) {
      this.snackBarService.open( "格式错误"+JSON.stringify(error), undefined, {duration: 2000} );
    }
   
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.modal.destroy()
  }
}
