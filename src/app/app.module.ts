import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContractsModule } from './contracts/contracts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContractsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
