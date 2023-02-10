import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
NoteService
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  noteListArray=[]

constructor(private noteService:NoteService){

}
//component hook ogonit

ngOnInit() {

  this.getAllNotes()

}
  getAllNotes(){
    // api here 
    console.log("get note is not calling");
    
    this.noteService.getAllNoteService().subscribe((result:any)=>{
      console.log(result.data.success);

      console.log(result.data.data);

      this.noteListArray=result.data.data
      this.noteListArray.reverse()

      console.log("this is notes array",this.noteListArray);
      
      

    })
  }


  received(e:any){
    console.log("note created succesfully",e.status.details);
    this.getAllNotes()
    const note=e.status.details
    // this.noteListArray.push(note:any)
    
  }

}
