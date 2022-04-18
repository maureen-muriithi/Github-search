import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhSearchComponent } from './Components/gh-search/gh-search.component';
import { GhFormComponent } from './Components/gh-form/gh-form.component';
import { GhUserComponent } from './Components/gh-user/gh-user.component';
import { GhRepoComponent } from './Components/gh-repo/gh-repo.component';
import { PFooterComponent } from './Components/p-footer/p-footer.component';
import { SearchGithubService } from './Services/search-github.service';
import { HttpClientModule } from '@angular/common/http';
import { DateCheckPipe } from './date-check.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GhSearchComponent,
    GhFormComponent,
    GhUserComponent,
    GhRepoComponent,
    PFooterComponent,
    DateCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
