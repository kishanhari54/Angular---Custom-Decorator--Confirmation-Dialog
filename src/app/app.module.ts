import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './confirm.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [AppComponent, HelloComponent, ConfirmComponent],
  bootstrap: [AppComponent],
  providers: [ConfirmService]
})
export class AppModule {
  static injector: Injector;

  constructor(private injector: Injector) {
    AppModule.injector = injector;
  }
}
