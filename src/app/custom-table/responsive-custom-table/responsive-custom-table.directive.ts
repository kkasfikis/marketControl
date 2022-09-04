import {
    AfterViewInit,
    Directive,
    ElementRef,
    OnDestroy,
    OnInit,
    Renderer2
  } from '@angular/core';
  import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
  import { map, mapTo, takeUntil } from 'rxjs/operators';
  
  @Directive({
    selector: '[responsive-custom-table]'
  })

  export class ResponsiveCustomTableDirective
    implements OnInit, AfterViewInit, OnDestroy {
    private onDestroy$ = new Subject<boolean>();
  
    private thead!: HTMLTableSectionElement ;// this.table.nativeElement.querySelector('thead');
    private tbody!: HTMLTableSectionElement ;//= this.table.nativeElement.querySelector('tbody');
  
    private theadChanged$ = new BehaviorSubject(true);
    private tbodyChanged$ = new Subject<boolean>();
  
    private theadObserver = new MutationObserver(() =>
      this.theadChanged$.next(true)
    );
    private tbodyObserver = new MutationObserver(() =>{
      console.log('body changed!!!!!!!!!!!!!!!')
      this.tbodyChanged$.next(true)
    }
    );
  
    constructor(private table: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit() {
      console.log('created!!!!!!!!!!!!!!!!!!!')
      this.thead = this.table.nativeElement.querySelector('thead');
      this.tbody = this.table.nativeElement.querySelector('tbody');
      
      this.theadObserver.observe(this.thead, {
        characterData: true,
        subtree: true
      });
      this.tbodyObserver.observe(this.tbody, { childList: true });
    }
  
    ngAfterViewInit() {
      /**
       * Set the "data-column-name" attribute for every body row cell, either on
       * thead row changes (e.g. language changes) or tbody rows changes (add, delete).
       */
       combineLatest([this.theadChanged$, this.tbodyChanged$])
       .pipe(
         mapTo<[
          HTMLTableRowElement,
          HTMLCollectionOf<HTMLTableRowElement>]>
            ([this.thead.rows.item(0)!, this.tbody.rows]),
         map(
           ([headRow, bodyRows]: [
            HTMLTableRowElement,
             HTMLCollectionOf<HTMLTableRowElement>
           ]) => [
             [...bodyRows].map(row => [...row.children]) ,
             [...headRow.children!].map(headerCell => headerCell.textContent)
           ] as [HTMLTableRowElement[][],string[]]
         ),
         takeUntil(this.onDestroy$)
       )
       .subscribe(([ rows,columnNames] : [HTMLTableRowElement[][],string[]]) =>{
        console.error(JSON.stringify(columnNames) + "|||"  + JSON.stringify(rows))
         rows.forEach(rowCells =>{
           console.log(JSON.stringify(rowCells))
           rowCells.forEach((cell,index) => {
              console.log('AAAAAAAAAAAAAA')
              this.renderer.setAttribute(
                cell,
                'data-column-name',
                columnNames[index] //[cell.cellIndex]
              )
           }
             
           )}
         )
             });
    }
  
    ngOnDestroy(): void {
      console.log('destroyed')
      this.theadObserver.disconnect();
      this.tbodyObserver.disconnect();
      this.onDestroy$.next(true);
    }
  }
  