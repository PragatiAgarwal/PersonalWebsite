import { Component, OnInit, Input } from '@angular/core';
import {ProfileService} from '../../Profile/profile.service'

@Component({
  selector: 'app-project-languages-used',
  templateUrl: './project-languages-used.component.html',
  styleUrls: ['./project-languages-used.component.css']
})
export class ProjectLanguagesUsedComponent implements OnInit {

  projectLanguages: string;
  @Input()repoLanguagesUrl: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProjectLangUsed();

  }

  getProjectLangUsed():void{
    this.profileService.getProjectLangUsed(this.repoLanguagesUrl).subscribe((data:string)=>{
      this.projectLanguages = JSON.stringify((data));
    });
  }

}
