import { Component, OnInit ,Input ,Host} from '@angular/core';
@Component({
  selector: 'app-m-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent implements OnInit {
  constructor(
    // @Host() private parent: CmpCardComponent
  ) { }

  ngOnInit() {
  }
}
