import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private fb: FormBuilder,private router:Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]]
    });
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  onSignIn() {
    if (this.signInForm.valid) {
      console.log('Sign in form submitted:', this.signInForm.value);
      alert("login sucesfully");
      // Handle sign in logic here
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
        // Handle password mismatch
        return;
      }
      console.log('Sign up form submitted:', this.signUpForm.value);
      // Handle sign up logic here
    }
}

  onBack(){
    this.router.navigate(['/']);
  }
}