import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GroupRowInnerRenderer } from './group-row-inner-renderer.component';
import { CellRendComponent } from './cell-rend/cell-rend.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule, HttpClientModule],
  declarations: [AppComponent, GroupRowInnerRenderer, CellRendComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
