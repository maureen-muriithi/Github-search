import { Component, OnInit, } from '@angular/core';
import { SearchGithubService } from 'src/app/Services/search-github.service';
import { Username } from 'src/app/Classes/username';
import { Repo } from 'src/app/Classes/repo';


@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})
export class GhUserComponent implements OnInit {

  user!: Username;
  repos:any;

  constructor(public ApiService: SearchGithubService) {

   }

   submitUser(username:string){
    this.ApiService.getUserData(username).then((success)=>{
     this.user = this.ApiService.user;
    },
    (error)=>{
      console.log(error)
    });
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

