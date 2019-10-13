/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

/* Components */
import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadFileComponent } from './read-file/read-file.component';
import { RotateTriangleComponent } from './rotate-triangle/rotate-triangle.component';

@NgModule({
  declarations: [
    /* Components */
    AppComponent,
    PizzaToppingComponent,
    ReadFileComponent,
    RotateTriangleComponent
  ],
  imports: [
    /* Modules */
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
