import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecretViewerComponent } from './secret-viewer/secret-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
