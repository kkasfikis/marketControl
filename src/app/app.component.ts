import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import {OverlayContainer} from "@angular/cdk/overlay"
import { Table, TableColumn, TableRow, TableRowAction, TableRowColumnValue } from './custom-table/custom-table.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketControl';
  toggleControl = new FormControl(false);
  public successMessage= this.testFunction.bind(this);
  public failureMessage= this.testFunction2.bind(this);
  public warningMessage= this.testFunction1.bind(this);

  table : Table | undefined
  columns : TableColumn[] = [{name:'A'} as TableColumn,{name:'B'} as TableColumn,{name:'C'} as TableColumn]
  displayedColumns : string[] = ['A','B','C']
  rows : TableRow[] = []

  constructor(private overlay: OverlayContainer) { }
  @HostBinding('class') className = '';
  
  ngOnInit(): void {
    this.table = {
      isEnabled:true,
      isFilterable:true,
      defaultPageSize:10
    }
    
    this.rows= [
      {
        values:
        [
          {column:this.columns[0],value:'A1'} as TableRowColumnValue,
          {column:this.columns[1],value:'A2'} as TableRowColumnValue,
          {column:this.columns[2],value:'A3'} as TableRowColumnValue,
        ],
        actions:
        [
          {name:'success',callbackFunc:this.successMessage,icon:'check_circle',color:'accent'},
          {name:'failure',callbackFunc:this.failureMessage,icon:'delete'},
          {name:'warning',callbackFunc:this.warningMessage,icon:'edit'}
        ]
      } as TableRow,
      {
        values:
        [
          {column:this.columns[0],value:'B1'} as TableRowColumnValue,
          {column:this.columns[1],value:'B2'} as TableRowColumnValue,
          {column:this.columns[2],value:'B3'} as TableRowColumnValue,
        ],
        actions: [
          {name:'failure',callbackFunc:this.failureMessage,icon:'delete'},
          {name:'warning',callbackFunc:this.warningMessage,icon:'edit'}
        ] as TableRowAction[]
      } as TableRow,
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [
          {name:'warning',callbackFunc:this.warningMessage,icon:'edit'}] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow,
      
      {
        values:
        [
          {column:this.columns[0],value:'C1'} as TableRowColumnValue,
          {column:this.columns[1],value:'C2'} as TableRowColumnValue,
          {column:this.columns[2],value:'C3'} as TableRowColumnValue,
        ],
        actions: [] as TableRowAction[]
      } as TableRow
    ]
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    }
  );
}

testFunction(args : any):void{
  alert('success')
  console.log('args : ' + args.test)
}

testFunction1(args : any):void{
  alert('warning')
  console.log('args : ' + args.test)
}

testFunction2(args : any):void{
  alert('error')
  console.log('args : ' + args.test)
}

}
