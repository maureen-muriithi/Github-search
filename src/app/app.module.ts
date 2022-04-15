import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhSearchComponent } from './Components/gh-search/gh-search.component';
import { GhFormComponent } from './Components/gh-form/gh-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GhSearchComponent,
    GhFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
