import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterFormRadioComponent } from './register-form-radio.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatRadioModule],
  declarations: [RegisterFormRadioComponent],
  providers: [],
  exports: [RegisterFormRadioComponent]
})
export class RegisterFormRadioComponentModule {
}
