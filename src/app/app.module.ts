import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

//=============Material===========
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
//============/Material===========
import { CompetitorsComponent } from './competitors/competitors.component';
import { CompetitorListComponent } from './competitors/competitor-list/competitor-list.component';
import { CompetitorEditComponent } from './competitors/competitor-edit/competitor-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { EshopsComponent } from './eshops/eshops.component';
import { EshopEditComponent } from './eshops/eshop-edit/eshop-edit.component';
import { EshopListComponent } from './eshops/eshop-list/eshop-list.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ResponsiveCustomTableModule } from './custom-table/responsive-custom-table/responsive-custom-table.module';
import {MatButtonModule} from '@angular/material/button';
import { TableFiltersComponent } from './custom-table/table-filters/table-filters.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form/dynamic-form-field/dynamic-form-field.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    CompetitorsComponent,
    CompetitorListComponent,
    CompetitorEditComponent,
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent,
    EshopsComponent,
    EshopEditComponent,
    EshopListComponent,
    CustomTableComponent,
    TableFiltersComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    //===========Material================
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ResponsiveCustomTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule
    //==========/Material================
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
