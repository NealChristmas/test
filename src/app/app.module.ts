import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndModule } from "ngx-drag-drop"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndirectDndHandleComponent } from "./indirect-dnd-handle/indirect-dnd-handle.component"
import { IndirectDragImageComponent } from "./indirect-drag-image/indirect-drag-image.component"

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ContainerComponent } from './container/container.component';
import { ReactiveDirective } from './reactive.directive';
import { ReactiveCmpComponent } from './reactive-cmp/reactive-cmp.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatGridListModule } from '@angular/material/grid-list';

import { MButtonComponent } from './cmps/m-button/m-button.component';
import { MInputComponent } from './cmps/m-input/m-input.component';
import { MDateComponent } from "./cmps/m-date/m-date.component";
import { MSlideComponent } from './cmps/m-slide/m-slide.component';
import { CmpCardComponent } from './cmps/cmp-card/cmp-card.component';
import { CmpEditComponent } from './cmp-edit/cmp-edit.component';
import { CmpJsonComponent } from './cmp-json/cmp-json.component';
import { CmpPreviewComponent } from './cmp-preview/cmp-preview.component'
@NgModule({
  declarations: [
    AppComponent,
    IndirectDndHandleComponent,
    ContainerComponent,
    ReactiveDirective,
    ReactiveCmpComponent,
    MButtonComponent,
    MInputComponent,
    MDateComponent,
    MSlideComponent,
    CmpCardComponent,
    CmpEditComponent,
    CmpJsonComponent,
    CmpPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatGridListModule,
    NgZorroAntdModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  entryComponents: [ MButtonComponent , MInputComponent , MSlideComponent , CmpJsonComponent ,CmpPreviewComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
