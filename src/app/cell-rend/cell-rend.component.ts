import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GroupCellRendererParams, ICellRendererParams, IRowNode } from 'ag-grid-community';

@Component({
  selector: 'app-cell-rend',
  templateUrl: './cell-rend.component.html',
  styleUrls: ['./cell-rend.component.css'],
})
export class CellRendComponent implements OnInit, ICellRendererAngularComp {
  public node!: IRowNode;
  params: ICellRendererParams = null;
  nodeDepth = []
  nodeIndentLevel = 0;
  agInit(params: ICellRendererParams): void {
    console.log('cell renderer aginit', params);
    this.nodeDepth = Array.from(Array(params.node.level).keys())
    this.nodeIndentLevel = Number(params.node.level)+1;
    this.params = params;
    this.node = params.node;
  }

  refresh(): boolean {
    return false;
  }
  constructor() {}

  ngOnInit() {}
}
