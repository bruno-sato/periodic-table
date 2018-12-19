import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElementsService } from './services/elements.service';
import { ElementsComponent } from './components/elements/elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
