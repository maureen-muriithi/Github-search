
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Username } from 'src/app/Classes/username';
import { GhUserComponent } from '../gh-user/gh-user.component';
import { SearchGithubService } from 'src/app/Services/search-github.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-gh-form',
  templateUrl: './gh-form.component.html',
  styleUrls: ['./gh-form.component.css']
})
export class GhFormComponent implements OnInit {

  public findUser!: string;
  @Output() searchResult = new EventEmitter<any>() 

  constructor() { }


  submitUser(){
    this.searchResult.emit(this.findUser);
    console.log('submited')
  }
  ngOnInit(): void {
  }

}