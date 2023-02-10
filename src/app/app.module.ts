import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { GetalltrashnotesComponent } from './components/getalltrashnotes/getalltrashnotes.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component'; 
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    GetallnotesComponent,
    CreateNoteComponent,
    DisplaynotesComponent,
    IconsComponent,
    GetalltrashnotesComponent,
    UpdatenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatDialogModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,ReactiveFormsModule,HttpClientModule,
    MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
