import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './Profile';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent{
    profile: Profile;
    
    constructor(private profileService: ProfileService){

    }
    ngOnInit(){
        this.profileService.getProfile().subscribe((data: Profile) => this.profile = {
            Name: data.Name,
            'Current Designation':  data['Current Designation'],
            Company: data.Company,
            email: data.email,
            'short intro': data['short intro'],
            ProfilePic: data.ProfilePic
        });;
        
    }
}