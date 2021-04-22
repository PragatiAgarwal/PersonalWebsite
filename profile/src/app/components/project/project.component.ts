import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../Profile/profile.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  gitRepo: JSON;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getGitRepos();
  }
  getGitRepos(){
    this.profileService.getGitRepos().subscribe((data:string)=>{
      this.gitRepo = JSON.parse(JSON.stringify((data)));
    });
  }

}
