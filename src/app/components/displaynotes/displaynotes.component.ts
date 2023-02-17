import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  searchValue:any
  @Input() childArrayList:any

  constructor(public dialog: MatDialog,private dataService:DataService){

  }

//array.filter

goBack(){
  history.back()
}

  ngOnInit(): void {
    this.dataService.recivedData.subscribe((res:any)=>{
      console.log(res);
      this.searchValue=res
      
    })
    
  }


  

  updateNote(noteObject:any){
    console.log("updte is calling ");
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data:noteObject ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    
  }


}
