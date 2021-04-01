import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './Profile';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent{
    profile: Profile[] = [];
    user: Profile = null;

    constructor(private profileService: ProfileService){

    }
    ngOnInit(){
        this.refreshUsers();
    }

    refreshUsers(){
    this.profileService.getProfile().subscribe((data: Profile[]) =>{
        this.profile = data;
    });
    }

    addProfile(){
        this.profileService.addProfile(this.user).subscribe(data => {
            console.log(data)
            this.refreshUsers();
        })
    }
}
