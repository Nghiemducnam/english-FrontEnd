import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LOGIN_SUCCESS, REGEX_EMAIL} from '../../shared/english.constant';
import {EventManagement} from '../../services/event.management';
import {ToastrService} from 'ngx-toastr';
import {LoginModel} from '../models/login.model';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  roles: string[] = [];
  loginForm: FormGroup;
  isLoginFailed: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private eventManagement: EventManagement,
              private toast: ToastrService,
               private token: TokenStorageService, private route: ActivatedRoute,
              private router: Router
              // private message: MessageService,
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [
        Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }



  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  reloadPage() {
    window.location.reload();
  }

  signIn() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUsername(data.userName);
        this.token.saveAuthorities(data.authorities[0].authority);
        // this.token.saveUserId(data.id);
        // this.token.saveName(data.name);
        // this.token.saveEmail(data.email);
        // this.token.saveAvatar(data.avatar);
        // this.token.saveUser(data);
        this.roles = this.token.getAuthorities();
        this.router.navigateByUrl('/verb');
        this.toast.success(LOGIN_SUCCESS)
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
      }
    );
  }

  ngOnDestroy(): void {
    this.reloadPage();
  }
}
