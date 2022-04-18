import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { Repository } from 'src/app/Classes/repository';
import { SearchGithubService } from 'src/app/Services/search-github.service';

@Component({
  selector: 'app-gh-repo',
  templateUrl: './gh-repo.component.html',
  styleUrls: ['./gh-repo.component.css']
})
export class GhRepoComponent implements OnInit {

  user!: User;
  repo :any;


  constructor(public SearchGithubService: SearchGithubService) { }

  searchUser(username:string){
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
