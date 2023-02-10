import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{
  @Input() noteObject:any
noteId:any
  constructor(){

  }
  ngOnInit(): void {
this.noteId=this.noteObject.id
    
  }

  delete(){
    console.log("printig note id");
    
    console.log(this.noteId);
    let data={
      noteIdList:[this.noteId],
      isDeleted:true
    }

    //api call
    
  }

}
