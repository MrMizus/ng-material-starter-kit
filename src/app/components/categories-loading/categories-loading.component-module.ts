import { NgModule } from '@angular/core';
import { CategoriesLoadingComponent } from './categories-loading.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    MatCardModule,
    NgIf,
    MatListModule,
    AsyncPipe,
    MatProgressSpinnerModule,
    NgForOf
  ],
  declarations: [CategoriesLoadingComponent],
  providers: [],
  exports: [CategoriesLoadingComponent]
})
export class CategoriesLoadingComponentModule {
}
