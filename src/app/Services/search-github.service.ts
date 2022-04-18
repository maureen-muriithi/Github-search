import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Classes/user';
import { Repository } from '../Classes/repository';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
})
export class SearchGithubService {

  user!:User;
  repos!:Repository;

  constructor(private http:HttpClient) { 
    this.user = new User("",0, "", 0,0,"",new Date(),new Date());
    this.repos = new Repository("","","","","",0,new Date(),new Date());
  }

  getUserData(username: string){
    interface ApiResponse{
      name:string,
	    public_repos:number,
	    login:string,
      followers:number
      following:number
	    avatar_url:string,
	    created_at:Date, 
	    updated_at:Date, 
	    html_url:string   
  }

}
}
