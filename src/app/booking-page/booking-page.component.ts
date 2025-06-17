import { Component, } from '@angular/core';
// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NumberSymbol } from '@angular/common';
import { BookingServiceService } from '../services/booking-service.service';
@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,CommonModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
bookingForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private bookingDataService:BookingServiceService) {
    this.bookingForm = this.fb.group({
      customerName: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      serviceCost: ['', [Validators.required, Validators.min(0)]],
      serviceProvider: ['', [Validators.required]]
    });
    
  }

  ngOnInit(): void {
    const data = this.bookingDataService.getBookingData();
    if (data) {
    this.bookingForm.patchValue({
      serviceProvider: data.serviceProviderName || '',
      serviceCost: data.serviceCost || ''
    });
  }
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log('Form submitted:', this.bookingForm.value);
      // Handle form submission logic here
      alert('Booking submitted successfully! We will get back to you shortly to confirm your appointment.');
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.bookingForm.controls).forEach(key => {
        this.bookingForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
    console.log('Form cancelled and reset');
  }




  // Getter methods for form validation
  get customerName() { return this.bookingForm.get('customerName'); }
  get customerAddress() { return this.bookingForm.get('customerAddress'); }
  get phoneNumber() { return this.bookingForm.get('phoneNumber'); }
  get serviceCost() { return this.bookingForm.get('serviceCost'); }
  get serviceProvider() { return this.bookingForm.get('serviceProvider'); }
}
