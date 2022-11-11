import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { EmployeesListComponent } from './employees-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent]
})
export class EmployeesListComponentModule {
}
