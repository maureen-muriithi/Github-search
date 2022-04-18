
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { HttpClient } from '@angular/common/http';
import { SearchGithubService } from 'src/app/Services/search-github.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gh-form',
  templateUrl: './gh-form.component.html',
  styleUrls: ['./gh-form.component.css']
})
export class GhFormComponent implements OnInit {

  user!: User;
	username!: string; 
	searchGithubService!: SearchGithubService; 

  submitUsername() {
		this.searchGithubService.getUserData(this.username);
	}

  constructor(searchGithubService:SearchGithubService) { 
		this.searchGithubService = searchGithubService;
	}

  ngOnInit(): void {
  }

}
