import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Username } from '../Classes/username';
import { Repo } from '../Classes/repo';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';



@Injectable( {
  providedIn: 'root'
})
export class SearchGithubService {

  user!:Username|any;
  repos!:Repo|any;
  
  constructor(private http:HttpClient) { 

    this.user = new Username("",0, "", 0,0,"",new Date(),new Date());
    this.repos = new Repo("","","",0,"",new Date(),new Date());
  }

    httpOptions={
          headers:new HttpHeaders({
            Authorization:`token ${environment.apiKey}`
          })
        }

  getUserData(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    }

    let userUrl = 'https://api.github.com/users/'+username+'?order=created&sort=asc?access_token='+environment.apiKey;

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then(response => {
        this.user = response;
        console.log(this.user)

        resolve()
      },
      error=>{
        this.user.name = "User not found"

        reject(error)
        })
      })
      return promise;
    }
    getUserRepo(username:string){
      interface ApiResponse{
        name:string,
        public_repos:number,
        login:string,
        followers:number
        following:number
        avatar_url:string,
        created_at:Date, 
        updated_at:Date,
      }
     
      // const url = `https://api.github.com/users/${userName}/repos`;
      // return this.http.get<any>(url, httpOptions);

      let repoUrl = 'https://api.github.com/users/'+username+"/repos?order=created&sort=asc?access_token="+environment.apiKey
      
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(repoUrl).toPromise().then(response => {
            this.repos = response;
            console.log (this.repos)

          resolve()
        },
        error=>{
          this.repos.name = "Search does not match any repositories"
  
          reject(error)
          })
        })
        return promise;

      }
}




