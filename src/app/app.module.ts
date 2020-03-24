import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
registerLocaleData(zh);

//thirdparty
import { DndModule } from "ngx-drag-drop";
import { DragulaModule } from 'ng2-dragula';
import { NgZorroAntdModule } from "ng-zorro-antd";


//local
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card"


import { ReactiveDirective } from "./reactive.directive";
import { InputDirective } from './cmps/input.directive';
import { CardDirective } from "./cmps/card.directive";


import { ContainerComponent } from "./container/container.component";
import { CmpCardComponent } from "./cmps/cmp-card/cmp-card.component";
import { CmpEditComponent } from "./cmp-edit/cmp-edit.component";
import { CmpJsonComponent } from "./cmp-json/cmp-json.component";
import { CmpPreviewComponent } from "./cmp-preview/cmp-preview.component";


import { CmpInputAreaComponent } from './cmp-input-area/cmp-input-area.component';
import { MHeadingComponent } from './cmps/m-heading/m-heading.component';
import { MInfoComponent } from './cmps/m-info/m-info.component';
import { MSlideComponent } from "./cmps/m-slide/m-slide.component"
import { MLinkageSelectComponent } from './cmps/m-linkage-select/m-linkage-select.component';
import { MTextAreaComponent } from './cmps/m-text-area/m-text-area.component';
import { MButtonComponent } from './cmps/m-button/m-button.component';
import { MDateComponent } from "./cmps/m-date/m-date.component";
import { MSelectComponent } from './cmps/m-select/m-select.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ReactiveDirective,
    CmpCardComponent,
    CmpEditComponent,
    CmpJsonComponent,
    CmpPreviewComponent,
    CardDirective,
    MDateComponent,
    MSelectComponent,
    CmpInputAreaComponent,
    MHeadingComponent,
    MInfoComponent,
    MLinkageSelectComponent,
    InputDirective,
    MTextAreaComponent,
    MButtonComponent,
    MSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule,
    FormsModule,
    MatSnackBarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    MatCardModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    MButtonComponent,
    MDateComponent,
    CmpJsonComponent,
    CmpPreviewComponent,
    CmpCardComponent,
    MSelectComponent,
    CmpInputAreaComponent,
    MHeadingComponent,
    MInfoComponent,
    MLinkageSelectComponent,
    MSlideComponent,
    MTextAreaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
