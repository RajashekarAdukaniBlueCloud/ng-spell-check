import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpellCheckService {

  private languageToolCheckAPI = "https://languagetool.org/api/v2/check";

  constructor(
    private http: HttpClient
  ) { }

  checkWithLanguageTool(params): Observable<any>{
    
    return this.http.post(this.languageToolCheckAPI, params);
  }
}
