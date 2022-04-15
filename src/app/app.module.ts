import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhSearchComponent } from './Components/gh-search/gh-search.component';
import { GhFormComponent } from './Components/gh-form/gh-form.component';
import { GhUserComponent } from './Components/gh-user/gh-user.component';
import { GhRepoComponent } from './Components/gh-repo/gh-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GhSearchComponent,
    GhFormComponent,
    GhUserComponent,
    GhRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
