import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ProfileService } from '../../Profile/profile.service'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  profileForm = new FormGroup({
    full_name           : new FormControl(''),
    current_designation : new FormControl(''),
    organization        : new FormControl(''),
    email               : new FormControl(''),
    short_intro         : new FormControl(''),
    profile_pic         : new FormControl(''),
    pid                 : new FormControl(''),
  });

  constructor(private profileService: ProfileService){}

  onSubmit(){
    console.log( "Hi "+ JSON.stringify(this.profileForm.value) );
    this.profileService.addProfile(JSON.stringify(this.profileForm.value) ).subscribe(data => {
    console.log(data);
  });
}

}
