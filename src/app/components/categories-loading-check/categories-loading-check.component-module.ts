import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesLoadingCheckComponent } from './categories-loading-check.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    CommonModule,
    MatListModule
  ],
  declarations: [CategoriesLoadingCheckComponent],
  providers: [],
  exports: [CategoriesLoadingCheckComponent]
})
export class CategoriesLoadingCheckComponentModule {
}
