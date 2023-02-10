import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title:any
  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
if(data){
  this.title=data.title

}
    
  }

  onNoClick(): void {
    console.log(" updted title",this.title, "note is ",this.data.id);
    // update note api
    // call api here
    this.dialogRef.close();
  }
}
