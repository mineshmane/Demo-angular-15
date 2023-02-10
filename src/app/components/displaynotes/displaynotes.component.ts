import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  @Input() childArrayList:any

  constructor(public dialog: MatDialog){

  }

  ngOnInit(): void {
    
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
