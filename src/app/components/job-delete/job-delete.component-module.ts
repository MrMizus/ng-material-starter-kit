import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { JobDeleteComponent } from './job-delete.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [JobDeleteComponent],
  providers: [],
  exports: [JobDeleteComponent]
})
export class JobDeleteComponentModule {
}
