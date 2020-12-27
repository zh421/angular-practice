import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideCardComponent } from './entities/cardPractice/side-card/side-card.component';
import { CCardComponent } from './entities/cardPractice/c-card/c-card.component';
import { FormBuComponent } from './entities/formBuilderPractice/form-bu/form-bu.component';
import { CardDemoComponent } from './entities/cardPractice/card-demo/card-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SideCardComponent,
    CCardComponent,
    FormBuComponent,
    CardDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
