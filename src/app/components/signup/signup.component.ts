import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signUpForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
      this.signUpForm = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.email]],
        lastname: ['', [Validators.required, Validators.email]],

          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      })
  }

  login(){
    if(this.signUpForm.valid){
    console.log("login function called",this.signUpForm.value);
    let data={
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password,
    }

    this.userService.loginService(data).subscribe((response:any)=>{
      console.log("response from backend ",response);
      
    })


    }
    

  }

}
