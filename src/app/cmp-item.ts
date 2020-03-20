import { Type } from '@angular/core';

export class CmpItem {
  constructor(public component: Type<any>,public id:string) {}
}


