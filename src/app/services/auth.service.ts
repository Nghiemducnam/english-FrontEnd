import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../auths/models/login.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {JwtResponse} from '../auths/models/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginModel): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${environment.api_endpoint}/api/auth/signin`, loginModel, httpOptions);
  }

  // signUp(info: SignUpInfo): Observable<string> {
  //   return this.http.post<string>(this.signupUrl, info, httpOptions);
  // }
  // updateUser(infor: UserForm): Observable<string> {
  //   return this.http.put<string>(this.updateProfile + '/' + infor.id , infor);
  // }
  //
  // updatePassword(passForm: PassForm): Observable<string> {
  //   return this.http.put<string>(this.changPassword + '/' + passForm.id , passForm);
  // }
}
