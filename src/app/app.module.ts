import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PokeAppComponent } from './pokeApp/pokeApp.component';


@NgModule({
  declarations: [
    AppComponent,
    PokeAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
