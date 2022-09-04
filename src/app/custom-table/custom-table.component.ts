import { AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Table, TableColumn, TableRow } from './custom-table.models';
import { waitForAsync } from '@angular/core/testing';
import { delay } from 'rxjs';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit,AfterViewInit {

  public dataLength : number = 0;
  public pageSize : number = 10;
  public pageSizeOptions : number [] = [5,10,20,50,100]

  public isLoading : boolean = false;
  public isEmpty : boolean = true;

  public tableDataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator,{static:false}) matPaginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) matSort! : MatSort

  @Input() table : Table | undefined
  @Input() columns : TableColumn[] = []
  @Input() displayedColumns : string[] = []
  @Input() rows : TableRow[] = []
  
  public displayedColumnsExtended : string[] = []
  //@Output() sort : EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor() { }

  ngAfterViewInit() {
    this.tableDataSource.sort = this.matSort;
    this.tableDataSource.paginator = this.matPaginator;
  }

  ngOnInit(): void {
      console.log('kati')
      this.displayedColumnsExtended = this.getExtendedColumns();
      this.isLoading = false;
      this.tableDataSource.data = this.getData(); 
      this.pageSize = this.table?.defaultPageSize!;
      this.dataLength = this.tableDataSource.data?.length;
      this.isEmpty = (this.dataLength <= 0);
  }

  getData(): any[]{
    let x = this.rows
    .flatMap(a=>a.values)
    .filter(x=>this.displayedColumns
    .includes(x.column.name));

    let y : any = [];
    let z :any = {} ;
    x.forEach((x,index)=>{
      if(index % this.displayedColumns.length == 0){
        z = {};
        z[x.column.name] = x.value;
      }
      else{
        z[x.column.name] = x.value;
        if(index %this.displayedColumns.length == this.displayedColumns.length -1){
          console.log(this.rows[Math.floor(index/this.displayedColumns.length)])
          z['actions'] = this.rows[Math.floor(index/this.displayedColumns.length)].actions!;
          y.push(z);  
          console.log(z);        
        }
      }
    })
    console.log(JSON.stringify(y))

    return y;
  }       

  getExtendedColumns(){
    let x = [ ...this.displayedColumns, 'actions']
    console.log(x)
    return x;
  }



  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      //this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      //this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
