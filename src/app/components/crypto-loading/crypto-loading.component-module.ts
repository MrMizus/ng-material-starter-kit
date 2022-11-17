import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoLoadingComponent } from './crypto-loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatChipsModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [CryptoLoadingComponent],
  providers: [],
  exports: [CryptoLoadingComponent]
})
export class CryptoLoadingComponentModule {
}
