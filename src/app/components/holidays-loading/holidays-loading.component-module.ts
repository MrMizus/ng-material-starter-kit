import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HolidaysLoadingComponent } from './holidays-loading.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatProgressBarModule],
  declarations: [HolidaysLoadingComponent],
  providers: [],
  exports: [HolidaysLoadingComponent]
})
export class HolidaysLoadingComponentModule {
}
