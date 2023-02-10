import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/services/typesInterfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private route:Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      })
  }

  login(){
    if(this.loginForm.valid){
    console.log("login function called",this.loginForm.value);
    let data={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
    }

    this.userService.loginService(data).subscribe((response:any)=>{
      console.log("response from backend ",response);

      localStorage.setItem('token',response.id)

      this.route.navigate(['home']) // programitcally routing
    })


    }
    

  }

}



//data bidning 
//validation 
// api intergartion