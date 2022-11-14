import { NgModule } from '@angular/core';
import { EmployeeRefreshListComponent } from './employee-refresh-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    MatButtonModule
  ],
  declarations: [EmployeeRefreshListComponent],
  providers: [],
  exports: [EmployeeRefreshListComponent]
})
export class EmployeeRefreshListComponentModule {
}
