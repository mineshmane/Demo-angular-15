import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  show: boolean = false
  title: any;
  description: any

  @Output() autoRefreshEvent = new EventEmitter<any>();
  constructor(private noteService: NoteService) {

  }

  showHide() {
    this.show = true
  }

  addNotes() {
    this.show = false

    console.log(this.title, this.description);

    let req = {
      title: this.title,
      description: this.description
    }
    this.noteService.createNote(req).subscribe((res: any) => {
      console.log(res);
      
      this.autoRefreshEvent.emit(res)

    })

  }

}
