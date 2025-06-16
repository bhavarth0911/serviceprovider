import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterModule } from '@angular/router';
import { ServiceDetailService } from '../services/service-detail.service';
import { response } from 'express';
@Component({
  selector: 'app-auth-componant',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,RouterModule],
  templateUrl: './auth-componant.component.html',
  styleUrl: './auth-componant.component.css'
})
export class AuthComponantComponent {
 isSignUp = false;
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private serviceDetail:ServiceDetailService) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      //lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
     // phoneNumber: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', [Validators.required]],
     // agreeToTerms: [false, [Validators.requiredTrue]]
    });
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  onSignIn() {
    if (this.signInForm.valid) {
      console.log('Sign in form submitted:', this.signInForm.value);
      this.serviceDetail.loginUser(this.signInForm.value).subscribe({
        next:(response)=>{
          
          if(response.attributes?.message=="Login successfull"){
            alert(response.attributes?.message);
          }
          
        },
        error: (err) => {
        if (err.error?.errors?.length) {
          
          alert(err.error.errors[0].message);
        }
      }
      })


      this.signInForm.reset();

      // Handle sign in logic here
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      
        this.serviceDetail.signupUser(this.signUpForm.value).subscribe({
        next:(response)=>{
          
          if(response.attributes?.message){
            alert(response.attributes?.message);
            this.signUpForm.reset();
          }
          
        },
        error: (err) => {
        if (err.error?.errors?.length) {
          
          alert(err.error.errors[0].message);
        }
      }
      });
      }
     
    
}

  onBack(){
    this.router.navigate(['/']);
  }
}