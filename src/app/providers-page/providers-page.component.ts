import { Component, OnInit } from '@angular/core';
import { ServiceDetailService } from '../services/service-detail.service';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';
import { BookingServiceService } from '../services/booking-service.service';

// Interface for service provider
interface ServiceProvider {
  serviceProviderId: number;
  serviceProviderName: string;
  address: string;
  phoneNumber: string;
  email: string;
  cost: number;
  serviceDetailsId: number;
}
interface ProvidersResponse {
  attributes: {
    serviceproviders: ServiceProvider[];
  };
  errors: any;
}
@Component({
  selector: 'app-providers-page',
  standalone: true,
  imports: [CommonModule,RouterModule,ResubaleNavbarComponent],
  templateUrl: './providers-page.component.html',
  styleUrl: './providers-page.component.css'
})

export class ProviderListComponent implements OnInit {

  serviceProviders: ServiceProvider[] = [];
  loading = true;
  error: string | null = null;
  serviceDetailId: string | null = null;

  constructor(
    private serviceDetailService: ServiceDetailService,
    private route: ActivatedRoute,
    private router:Router,
    private bookingDataService:BookingServiceService
  ) {}

  ngOnInit(): void {
    // Get serviceDetailId from query parameters
    this.route.queryParams.subscribe(params => {
      this.serviceDetailId = params['serviceDetailId'];
      if (this.serviceDetailId) {
        this.loadProviders(this.serviceDetailId);
      } else {
        this.error = 'Service detail ID not provided';
        this.loading = false;
      }
    });
  }

  loadProviders(serviceDetailId: string): void {
    this.loading = true;
    this.error = null;
    
    this.serviceDetailService.getProvidersByServiceDetailId(serviceDetailId).subscribe({
      next: (response: ProvidersResponse) => {
        if (response.attributes && response.attributes.serviceproviders) {
          this.serviceProviders = response.attributes.serviceproviders;
        } else {
          this.serviceProviders = [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching service providers', err);
        this.error = this.error = err.error.errors[0].message;
        alert(this.error);  
        this.loading = false;
      }
    });
  }

bookProvider(provider: ServiceProvider): void {
  this.bookingDataService.setBookingData({
    serviceProviderName: provider.serviceProviderName,
    serviceCost: provider.cost
  });
  this.router.navigate(['/booking-page']);
}












  
  // serviceProviders =[
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  //    {
  //     serviceProviderName:"bhavarth",
  //     email: 'bhavarthnagavkar@gmail.com',
  //     phoneNumber: 7391838372,
  //     address: 'pune',
  //     cost: 45
  //   },
  // ]
}