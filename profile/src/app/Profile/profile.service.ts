import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './Profile';
import { Observable } from 'rxjs';


@Injectable()

export class ProfileService{
    baseUrl: string = '/api';

    constructor(private http: HttpClient ){ }

    getProfile():Observable<Profile[]> {
        return this.http.get<Profile[]>(this.baseUrl+'/users', {observe: 'body', responseType: "json" });
    }
    addProfile(body:string): Observable<any> {
        const headers = { 'content-type': 'application/json'}
        return this.http.post(this.baseUrl+'/user', body,{'headers':headers})
      }
      getGitRepos():Observable<string>{
        return this.http.get<string>('https://api.github.com/users/PragatiAgarwal/repos', {observe: 'body', responseType: "json"});
      }

      getProjectLangUsed(url:string):Observable<string>{
        return this.http.get<string>(url, {observe: 'body', responseType: "json"});
      }
}
