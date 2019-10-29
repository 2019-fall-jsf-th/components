import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { TjeMultiplicationComponent } from './tje-multiplication/tje-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingComponent,
    TjsAdditionComponent,
    TjeMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
