import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IrregularVerb} from '../models/IrregularVerb';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  constructor(private http: HttpClient) { }
  // getIrregularList() {
  //   return this.http.get<any>(`${environment.api_endpoint}/api/job/search`).toPromise();
  // }

  getIrregularList(irr: IrregularVerb): Observable<any> {
    return this.http.post(`${environment.api_endpoint}/api/irregularVerb/list`, irr, {});
  }
}
