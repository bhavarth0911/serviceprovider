import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgIf } from '@angular/common';
import { ServiceDetailService, ServiceProvidersList } from '../services/service-detail.service';
@Component({
  selector: 'app-all-providers-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './all-providers-page.component.html'
})
export class AllProvidersPageComponent implements OnInit {
  constructor(private serviceDetailService:ServiceDetailService)
  {
  }

  isFilterPopup = false;
  popupX = 0;
  popupY = 0;
  serviceProviders: ServiceProvidersList[] = [
    {
                serviceProviderId: 1,
                serviceProviderName: "Deven khade",
                address: "pune",
                phoneNumber: "7381737373",
                email: "bhavarthnagavkar@gmail.com",
                cost: 200,
                serviceDetailsId: 1,
                serviceName: "home service",
                serviceDescription: "Cleaning, maintenance, and repair services for your home.",
                serviceRating: 4.5
            }
  ];

  
  
  ngOnInit(): void {

    
    //Temporary commented out for UI Testing with static data 

    
    //  this.serviceDetailService.getProviders().subscribe({
    //   next: (response: ServiceProvidersList[]) => {
    //       this.serviceProviders = response;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching service providers', err);
    //     alert('Error fetching service providers'+ err)
    //   }
    // });
  }
  @ViewChild('triggerBtn', { read: ElementRef }) triggerBtn!: ElementRef;

  togglePopup() {
    
      this.isFilterPopup = !this.isFilterPopup;
    if (this.isFilterPopup && this.triggerBtn) {
      const rect = this.triggerBtn.nativeElement.getBoundingClientRect();
      this.popupX = ((rect.left + window.scrollX-208)+(rect.left + window.scrollX))/2;
      this.popupY = rect.bottom+window.screenY;
    }
}
}