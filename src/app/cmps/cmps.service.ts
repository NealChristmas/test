import { Injectable ,Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmpsService {
  @Output() updateInput: EventEmitter<any> = new EventEmitter();
  constructor() { }
  notifyInput(){
    this.updateInput.emit()
  }
}
