import { Component, OnInit } from '@angular/core';
import { ServiceDetailService } from '../services/service-detail.service';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';

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
    private route: ActivatedRoute
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
        this.error = 'Failed to load service providers. Please try again.';
        this.loading = false;
      }
    });
  }

  bookProvider(provider: ServiceProvider): void {
    // Implement booking logic here
    console.log('Booking provider:', provider);
    alert("you booking is confirmed")
    // You can navigate to booking page or open a modal
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