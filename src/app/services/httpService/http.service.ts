import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILogin, ISignup, IforgetPassword } from '../typesInterfaces';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  BaseUrl: string = "http://fundoonotes.incubation.bridgelabz.com/api/"

  constructor(private httpClient: HttpClient) { }

  // CRUD genraics
  PostService(url: string, requestData: ILogin | ISignup | IforgetPassword, token: boolean = false, headersOptions: any) {
    console.log("data in http", requestData);

    return this.httpClient.post(this.BaseUrl + url, requestData, token && headersOptions)

  }


  GetService(url: string,  token: boolean = false, headersOptions: any) {
    
    return this.httpClient.get(this.BaseUrl + url, token && headersOptions)


  }

  PutService() {

  }


  DeletService() {

  }





}
