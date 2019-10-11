import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSizingComponent } from './image-sizing/image-sizing.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingComponent,
    ImageSizingComponent
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
