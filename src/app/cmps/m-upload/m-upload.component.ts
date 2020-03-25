import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-m-upload',
  templateUrl: './m-upload.component.html',
  styleUrls: ['./m-upload.component.scss'],
  encapsulation : ViewEncapsulation.None

})
export class MUploadComponent implements OnInit {
  fileList = [
    {
      uid: 1,
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
