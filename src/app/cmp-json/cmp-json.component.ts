import { Component, OnInit,Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ReactiveContainerService } from "../reactive-container.service"
@Component({
  selector: 'app-cmp-json',
  templateUrl: './cmp-json.component.html',
  styleUrls: ['./cmp-json.component.scss']
})
export class CmpJsonComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  cmpsJson:any
  constructor(
    private modal: NzModalRef,
    private reactiveContainerService:ReactiveContainerService
    ) { }

  ngOnInit() {
    this.cmpsJson = this.reactiveContainerService.collectInstanceConfiguration()
   
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
