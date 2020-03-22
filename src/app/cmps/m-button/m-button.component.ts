import { Component, OnInit ,Input ,Host} from '@angular/core';
import { ReactiveContainerService } from "../../reactive-container.service"
import { CmpCardComponent } from "../cmp-card/cmp-card.component"
@Component({
  selector: 'app-m-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent implements OnInit {
  constructor(
    public reactiveContainerService:ReactiveContainerService,
    // @Host() private parent: CmpCardComponent
  ) { }

  ngOnInit() {
  }
}
