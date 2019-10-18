/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RotateTriangleComponent } from './rotate-triangle/rotate-triangle.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Apweek6Component } from './apweek6/apweek6.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LxSubtractComponent } from './lx-subtract/lx-subtract.component';
import { WisconsinSalesTaxComponent } from './wisconsin-sales-tax/wisconsin-sales-tax.component';
import { JpsMathComponent } from './jps-math/jps-math.component';
import { GregCardComponent } from './greg-card/greg-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select'
import { SluggingPercentageComponent } from './slugging-percentage/slugging-percentage.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { SumThingComponent } from './sum-thing/sum-thing.component';

@NgModule({
  declarations: [
    /* Components */
    AppComponent,
    PizzaToppingComponent,
    Apweek6Component,
    LxSubtractComponent,
    WisconsinSalesTaxComponent,
    JpsMathComponent,
    GregCardComponent,
    RotateTriangleComponent,
    SluggingPercentageComponent,
    TjsAdditionComponent,
    SumThingComponent
  ],
  imports: [
    /* Modules */
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
