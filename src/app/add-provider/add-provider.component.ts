// service-provider-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ServiceDetailService } from '../services/service-detail.service';
@Component({
  selector: 'app-add-provider',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,RouterModule],
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit{
serviceProvider :FormGroup=new FormGroup({
    serviceProviderName:new FormControl(''),
    address:new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    serviceDetailsId: new FormControl(''),
    cost: new FormControl('')
  }) 
  loading = false;
  message = '';
  error = '';
   formValue:any;

  // Sample service types - you can modify these based on your needs
  serviceTypes = [
    { label: 'Home service', value: '1' },
    { label: 'Automotive Services', value: '2' },
    { label: 'Technical Repair', value: '3' },
    { label: 'Beauty & Wellness', value: '4' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServiceDetailService,
  ) {
    
  }

  ngOnInit(): void {}

   onSubmit() {
    this.loading = true;
    this.message = '';
    this.error = '';

    this.formValue=this.serviceProvider.value;
    this.service.addServiceProvider(this.formValue).subscribe({
      next: (response) => {
        this.loading = false;
        if (response?.attributes?.message) {
          this.message = response.attributes.message;
          alert(this.message);
          this.router.navigate(['/']); // navigate on success
        }
      },
      error: (err) => {
        this.loading = false;
        if (err.error?.errors?.length) {
          this.error = err.error.errors[0].message;
        } else {
          this.error = 'Something went wrong!';
        }
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

}