import { Component, OnInit, Input, Output } from '@angular/core';
import { SearchGithubService } from 'src/app/Services/search-github.service';
import { User } from 'src/app/Classes/user';


@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})
export class GhUserComponent implements OnInit {

  user!: User;
  repo:any;

  constructor(public SearchGithubService: SearchGithubService) {

   }

   searchUser(username:string){
    this.SearchGithubService.getUserData(username).then((success)=>{
     this.user = this.SearchGithubService.user;
    },
    (error)=>{
      console.log(error)
    });
    this.SearchGithubService.getUserRepo(username).then((success)=>{
     this.repo = this.SearchGithubService.repo;
    },
    (error)=>{
      console.log(error)
    });
  }

  ngOnInit(): void {
    this.searchUser("Maureen-muriithi");
  }

}