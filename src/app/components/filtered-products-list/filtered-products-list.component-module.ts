import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilteredProductsListComponent } from './filtered-products-list.component';
import {RouterLink} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink, FlexModule],
  declarations: [FilteredProductsListComponent],
  providers: [],
  exports: [FilteredProductsListComponent]
})
export class FilteredProductsListComponentModule {
}
