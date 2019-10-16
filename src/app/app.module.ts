import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { BillsWilksCalcComponent } from './bills-wilks-calc/bills-wilks-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingComponent,
    BillsWilksCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
