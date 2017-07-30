import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class SurveyService {
  user = null;
  constructor(private _http: Http) { }

  login(data){
    this.user = data;
  }

  dashboard(){
    return this.user
  }

  create(data){
    data['author'] = this.user;
    return this._http.post('/create', data).map(data=>data.json()).toPromise()
  }

  findall(){
      return this._http.get('/polls').map(data=>data.json()).toPromise()
  }

  findone(id){
    return this._http.post('/poll', {id: id}).map(data=>data.json()).toPromise()
  }

  vote(data){
    return this._http.post('/vote', data).map(data=>data.json()).toPromise()
  }

}
