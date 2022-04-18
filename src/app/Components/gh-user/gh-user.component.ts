import { Component, OnInit, Input, Output } from '@angular/core';
// import { SearchGithubService } from '../search-github.service';
import { User } from 'src/app/Classes/user';


@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})
export class GhUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
