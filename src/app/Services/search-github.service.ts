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
  repo!:Repository;
  repoInfo = [];
	newUserInfo: any = [];

  constructor(private http:HttpClient) { 
    this.user = new User("",0, "", 0,0,"",new Date(),new Date());
    this.repo = new Repository("","","","","",0,new Date(),new Date());
  }

  getUserData(username: string){
    this.repoInfo.length = 0;
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

    let BASE_URL_USER = 'https://api.github.com/users/'+username+'?access_token='+environment.githubApiToken;	
    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(BASE_URL_USER).toPromise().then
      (response => {
        // this.user = response;

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
        name:string;
        html_url:string;
        description:string;
        language:string;
        watching: number;
        updated_at: Date;
        created_at:Date
        
      }
      let BASE_URL_REPO = 'https://api.github.com/users/'+username+"/repos?order=created&sort=asc?access_token="+environment.githubApiToken
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(BASE_URL_REPO).toPromise().then
        (response => {
            // this.repo = response;
            console.log(this.repo);
          resolve()
        },
        error=>{
          this.repo.name = "Search does not match any repositories"
  
          reject(error)
          })
        })
        return promise;

      }
    }
	        // this.http.get<ApiResponse>("https://api.github.com/users/" + username + '?access_token='+environment.githubApiToken).toPromise().then
          // (response=>{
	            
	        //     this.user.name=response.name;
          //     this.user.public_repos=response.public_repos;
          //     this.user.login=response.login;
          //     this.user.followers=response.followers
          //     this.user.following=response.following
	        //     this.user.avatar_url=response.avatar_url;
	        //     this.user.created_at=response.created_at;
	        //     this.user.updated_at=response.updated_at;
	          
	        //     resolve()
	        // },
	        // error=>{
          //   this.user.name = "User not found"
	        //         reject(error)
	        //     }
	        // )

	        // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
// 	        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
// 	        	// We then pass the interface with the get method. 
// 	        	for(var i=0; i<response.length; i++)
// 	        	{
// 	        		// If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
// 	        		this.newUserInfo = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
// 	        		this.repoInfo.push(this.newUserInfo);
// 	        	}

// 	            resolve()

// 	        },
// 	        error=>{
//             this.repo.name = "Search does not match any repo"
// 	                reject(error)
// 	            }
// 	        )
// 	    })

// 	    return promise
// 	}

	



// }
