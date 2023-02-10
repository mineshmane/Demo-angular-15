import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }
  // crateNote

  getAllNoteService() {
    let requestHeadersOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }

    return this.httpService.GetService('notes/getNotesList', true, requestHeadersOptions)
  }

  createNote(data:any){
    this.token=localStorage.getItem('token')
    let requestHeadersOptions = {
      headers: new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }

    return this.httpService.PostService('notes/addNotes ', data,true, requestHeadersOptions)

  }
}
