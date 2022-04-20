import { Component } from '@angular/core';
import { SearchGithubService } from './Services/search-github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
}

