import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductListDetailsComponent } from './product-list-details.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [ProductListDetailsComponent],
  providers: [],
  exports: [ProductListDetailsComponent]
})
export class ProductListDetailsComponentModule {
}
