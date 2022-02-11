import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import {AuthService} from 'src/app/shared/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables 
  loginForm! : FormGroup;
  isSubmitted = false;
  errors = '';
  loginUser : any = new User();
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authservice:AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //formControl fields
        Name : ['',[Validators.required]],
        Pass : ['',[Validators.required]]
      }
    );
  }


  //get control for validation 
  get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){

    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    if(this.loginForm.valid){
      console.log("with Valid")
      this.errors='';
        //caling method from authservices
        this.authservice.loginVerify(this.loginForm.value)
        .subscribe(
          data=>{
            console.log(data);
            this.loginUser=data;

            sessionStorage.setItem("jwtToken",this.loginUser.token)

            //check the role based on rid it redirect to the respective omponent            
            if(this.loginUser.RId===2){
              console.log("USER");
              localStorage.setItem("USERNAME",this.loginUser.Name);
              localStorage.setItem("ACCESSROLE",this.loginUser.RId.toString())
              sessionStorage.setItem("USERNAME",this.loginUser.Name);
              this.router.navigateByUrl('/userlistmovie');
            }
            else if(this.loginUser.RId===1){
              console.log("ADMIN");
              localStorage.setItem("USERNAME",this.loginUser.Name);
              localStorage.setItem("ACCESSROLE",this.loginUser.RId.toString())
              sessionStorage.setItem("USERNAME",this.loginUser.Name);
              this.router.navigateByUrl('/userlisthobby');
            }
            else{
              this.errors="sorry! no access"
            }
          },
          error=>{
            this.errors="invalid username or password.try agaain"
          }
        )
    }

    if(this.loginForm.invalid){
      console.log("Is Invalid");
      return;
    }
  }

}
