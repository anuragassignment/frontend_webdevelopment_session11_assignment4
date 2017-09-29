import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Capitalize } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Capitalize,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
