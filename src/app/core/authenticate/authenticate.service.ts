import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {UserAuth} from "../../shared/models/user.model";
import {HttpBackend, HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private http: HttpClient;
  private tokenExpirationTimer: any;

  baseUrl = environment.baseUrl;
  baseApiUrl = environment.baseApiUrl;
  // @ts-ignore
  currentUserData = new BehaviorSubject<UserAuth>(null);
  clientSecret = environment.clientSecret;
  clientId = environment.clientId;


  constructor(private httpBackend: HttpBackend,
              private router: Router) {
    this.http = new HttpClient(httpBackend);
  }

  login(loginData: { nic: string, password: string }) {
    return this.http.post<any>(`${this.baseUrl}/oauth/token`,
      {
        grant_type: 'password',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        nic: loginData.nic,
        password: loginData.password,
        scope: ''
      }
    ).pipe(
      catchError((error) => {
        return throwError(error);
      }),
      tap(authResponse => {
        this.authenticateUser(
          {
            id: authResponse.data.user.id,
            tokenType: authResponse.data.auth.token_type,
            expiresIn: authResponse.data.auth.expires_in,
            accessToken: authResponse.data.auth.access_token,
            refreshToken: authResponse.data.auth.refresh_token
          }
        );
      })
    );
  }

  private authenticateUser(userAuthData: {
    tokenType: string,
    expiresIn: number,
    accessToken: string,
    refreshToken: string,
    id?: number,
  }) {
    const expirationDate = new Date(new Date().getTime() + userAuthData.expiresIn * 1000);
    const user = new UserAuth(
      userAuthData.tokenType,
      expirationDate,
      userAuthData.accessToken,
      userAuthData.id
    );
    this.currentUserData.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  registerUser(data: { name: string, nic: string, password: string, password_confirmation: string }) {
    return this.http.post(`${this.baseApiUrl}/auth/register`, data).pipe(tap(resp => {
      console.log(resp);
    }));
  }
}
