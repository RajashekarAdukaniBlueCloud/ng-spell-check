import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Params } from './models/params.model';
@Injectable()
export class SpellCheckService {

  private languageToolCheckAPI = "https://languagetool.org/api/v2/check";

  constructor(
    private http: HttpClient
  ) { }

  checkWithLanguageTool(value): Observable<any>{
    const params = new HttpParams()
    .set('text', value)
    .set('language', 'auto');

    return this.http.post(this.languageToolCheckAPI, params.toString());
  }
}
