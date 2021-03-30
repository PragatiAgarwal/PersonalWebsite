import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Profile } from './Profile';
import { Observable } from 'rxjs';


@Injectable()

export class ProfileService{
    baseUrl: string = 'http://10.244.116.34:3000';
   
    constructor(private http: HttpClient ){ }
    
    getProfile():Observable<Profile[]> {
        return this.http.get<Profile[]>(this.baseUrl+'/users', {observe: 'body', responseType: "json" });
    }
    addProfile(profile:Profile): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(profile);
        return this.http.post(this.baseUrl+'/user', body,{'headers':headers})
      }
}