import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { RegisterModel } from '../../models/register.model';
import { AuthResponseModel } from '../../models/auth-response.model';
import { LoginModel } from '../../models/login.model';
import { environment } from '../../../../environments/environment';
import { endpointUrls } from '../../../../environments/endpoint-routes-manager';
import { TokenStorageService } from './token-storage.service';
import { RecoverPassword } from '../../models/recover-password.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private hostURL = environment.url + endpointUrls.apiPrefix;

  private loginURL = this.hostURL + '/login';
  private registerURL = this.hostURL + '/register';
  private confirmURL = this.hostURL + '/registration_confirm';
  private emailForRecoverURL = this.hostURL + '/reset-password';
  private createPasswordURL = this.hostURL + '/create-password-save';
  private recoverPasswordURL = this.hostURL + '/reset-password-save';
  private resendConfirmURL = this.hostURL + '/resend_registration_token';

  private httpOptions = { observe: 'response' as const };

  isUnauthorizedUser = true;
  isCourier = false;
  isAuthorizedUser = false;
  isProductManager = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  // @ts-ignore
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      alert('Сталася помилка. Перезавантажте сайт');
      this.logOut();
    } else {
      console.error(
        `Сталася помилка сервера з кодом ${error.status}, ` +
          ` текст: ${error.error}`
      );
    }
    return throwError('some shit');
  }

  logOut(): void {
    this.tokenStorageService.signOut();
    this.isUnauthorizedUser = true;
    this.isCourier = false;
    this.isAuthorizedUser = false;
    this.isProductManager = false;
  }

  isAuthorised(): boolean {
    return this.tokenStorageService.isAuthorised();
  }

  register(
    registerData: RegisterModel
  ): Observable<HttpResponse<AuthResponseModel>> {
    return this.http.post<AuthResponseModel>(
      this.registerURL,
      registerData,
      this.httpOptions
    );
  }

  login(loginData: LoginModel): Observable<HttpResponse<AuthResponseModel>> {
    return this.http.post<AuthResponseModel>(
      this.loginURL,
      loginData,
      this.httpOptions
    );
  }

  setRole(): void {
    const userRole = this.tokenStorageService.getRole();
    switch (userRole) {
      case null:
        this.isUnauthorizedUser = true;
        break;
      case 'USER':
        this.isAuthorizedUser = true;
        this.isUnauthorizedUser = false;
        break;
      case 'COURIER':
        this.isCourier = true;
        this.isUnauthorizedUser = false;
        break;
      case 'PRODUCT_MANAGER':
        this.isProductManager = true;
        this.isUnauthorizedUser = false;
        break;
    }
  }

  confirmRegistration(token: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.confirmURL + '?token=' + token);
  }

  resendRegistration(token: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resendConfirmURL + '?token=' + token);
  }

  recoverPassword(
    token: string,
    recoverData: RecoverPassword
  ): Observable<HttpResponse<any>> {
    return this.http.post(
      this.recoverPasswordURL + '?token=' + token,
      recoverData,
      this.httpOptions
    );
  }

  createPassword(
    token: string,
    recoverData: RecoverPassword
  ): Observable<HttpResponse<any>> {
    return this.http.post(
      this.createPasswordURL + '?token=' + token,
      recoverData,
      this.httpOptions
    );
  }

  sendEmailForRecover(email: string): Observable<HttpResponse<any>> {
    return this.http.post(
      this.emailForRecoverURL + '?email=' + email,
      null,
      this.httpOptions
    );
  }
}
