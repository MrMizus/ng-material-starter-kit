import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductListDetailsComponent } from './product-list-details.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductListDetailsComponent],
  providers: [],
  exports: [ProductListDetailsComponent]
})
export class ProductListDetailsComponentModule {
}
