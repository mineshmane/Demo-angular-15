import { Injectable } from '@angular/core';
import { IforgetPassword, ILogin, ISignup } from '../typesInterfaces';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any
  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem('token')
  }

  loginService(requestPayload: ILogin) {
    let requestHeadersOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }
    console.log("payload in user service", requestPayload);
    return this.httpService.PostService('user/login', requestPayload, false, requestHeadersOptions)


  }

  registrationService(requestData: ISignup) {
    let requestHeadersOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }
    return this.httpService.PostService('user/signup', requestData, false, requestHeadersOptions)

  }

  //.....
  forgetPasswordService(requestPayload: IforgetPassword) {

  }


}
