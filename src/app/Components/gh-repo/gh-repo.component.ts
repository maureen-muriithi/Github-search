import { Component, OnInit } from '@angular/core';
import { Username } from 'src/app/Classes/username';
import { Repo } from 'src/app/Classes/repo';
import { SearchGithubService } from 'src/app/Services/search-github.service';

@Component({
  selector: 'app-gh-repo',
  templateUrl: './gh-repo.component.html',
  styleUrls: ['./gh-repo.component.css']
})
export class GhRepoComponent implements OnInit {

  user!: Username;
  repos:any;


  constructor(public ApiService: SearchGithubService) { }

  submitUser(username:string){
    this.ApiService.getUserRepo(username).then((success)=>{
      this.repos = this.ApiService.repos;
     },
     (error)=>{
       console.log(error)
     });
  }
  ngOnInit(): void {
    this.submitUser("Maureen-muriithi");
  }

}
