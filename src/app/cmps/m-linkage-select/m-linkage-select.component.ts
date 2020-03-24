import { Component, OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true,
        disabled: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

const otherOptions = [
  {
    value: 'fujian',
    label: 'Fujian',
    children: [
      {
        value: 'xiamen',
        label: 'Xiamen',
        children: [
          {
            value: 'Kulangsu',
            label: 'Kulangsu',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    value: 'guangxi',
    label: 'Guangxi',
    children: [
      {
        value: 'guilin',
        label: 'Guilin',
        children: [
          {
            value: 'Lijiang',
            label: 'Li Jiang River',
            isLeaf: true
          }
        ]
      }
    ]
  }
];
@Component({
  selector: 'app-m-linkage-select',
  templateUrl: './m-linkage-select.component.html',
  styleUrls: ['./m-linkage-select.component.scss']
})
export class MLinkageSelectComponent implements OnInit {

  constructor() { } 
  public 
  public linkageOptions = {
    company:[
      {
        value: '27',
        label: '重庆',
        isLeaf:true
      },
      {
        value: '8',
        label: '河南',
        isLeaf:true
      }
    ],
    division:[
      {
        value: '27',
        label: '重庆',
        children: [
          {
            value: 'beibei',
            label: '基础研发部',
           isLeaf:true
          },
          {
            value: 'unknown',
            label: '人力资源',
           isLeaf:true
          }
        ]
      },
      {
        value: '8',
        label: '河南',
        children: [
          {
            value: 'beibei',
            label: '基础研发部',
           isLeaf:true
          },
          {
            value: 'unknown',
            label: '人力资源',
           isLeaf:true
          }
        ]
      }
    ],
    unit:[
      {
        value: '27',
        label: '重庆',
        children: [
          {
            value: 'beibei',
            label: '基础研发部',
            children: [
              {
                value: 'neal',
                label: 'neal',
                isLeaf: true
              },
              {
                value: 'jack',
                label: 'jack',
                isLeaf: true
              }
            ]
          },
          {
            value: 'unknown',
            label: '人力资源',
            children: [
              {
                value: 'neal',
                label: 'xxx',
                isLeaf: true
              },
              {
                value: 'jack',
                label: 'xxx2',
                isLeaf: true
              }
            ]
          }
        ]
      },
      {
        value: '8',
        label: '河南',
        children: [
          {
            value: 'beibei',
            label: '基础研发部',
            children: [
              {
                value: 'neal',
                label: 'neal',
                isLeaf: true
              },
              {
                value: 'jack',
                label: 'jack',
                isLeaf: true
              }
            ]
          },
          {
            value: 'unknown',
            label: '人力资源',
            children: [
              {
                value: 'neal',
                label: 'xxx',
                isLeaf: true
              },
              {
                value: 'jack',
                label: 'xxx2',
                isLeaf: true
              }
            ]
          }
        ]
      },
    ]
    
    
  }
  nzOptions: NzCascaderOption[] | null = null;
  values: string[] | null = null;

  ngOnInit(): void {
  }

  changeNzOptions(): void {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

}
