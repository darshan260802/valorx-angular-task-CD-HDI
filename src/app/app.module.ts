import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChangeDetectionModule } from './pages/change-detection/change-detection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChangeDetectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
