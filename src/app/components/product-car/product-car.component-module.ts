import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductCarComponent } from './product-car.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule],
  declarations: [ProductCarComponent],
  providers: [],
  exports: [ProductCarComponent]
})
export class ProductCarComponentModule {
}
