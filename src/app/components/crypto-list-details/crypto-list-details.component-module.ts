import { NgModule } from '@angular/core';
import { CryptoListDetailsComponent } from './crypto-list-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    NgIf
  ],
  declarations: [CryptoListDetailsComponent],
  providers: [],
  exports: [CryptoListDetailsComponent]
})
export class CryptoListDetailsComponentModule {
}
