import { NgModule } from '@angular/core';
import { EmployeeListDetailsComponent } from './employee-list-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    NgIf,
    MatButtonModule,
    AsyncPipe
  ],
  declarations: [EmployeeListDetailsComponent],
  providers: [],
  exports: [EmployeeListDetailsComponent]
})
export class EmployeeListDetailsComponentModule {
}
