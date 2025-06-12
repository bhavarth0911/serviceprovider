import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgIf } from '@angular/common';
import { ServiceProvidersList } from '../services/service-detail.service';
@Component({
  selector: 'app-all-providers-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './all-providers-page.component.html'
})
export class AllProvidersPageComponent implements OnInit {
   isFilterPopup = false;
  popupX = 0;
  popupY = 0;
  serviceProviders: ServiceProvidersList[] = [];

  ngOnInit(): void {
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

 
// "serviceproviders": [
//             {
//                 "serviceProviderId": 1,
//                 "serviceProviderName": "Deven khade",
//                 "address": "pune",
//                 "phoneNumber": "7381737373",
//                 "email": "bhavarthnagavkar@gmail.com",
//                 "cost": 200,
//                 "serviceDetailsId": 1,
//                 "serviceName": "home service",
//                 "serviceDescription": "Cleaning, maintenance, and repair services for your home.",
//                 "serviceRating": 4.5
//             }
//           }
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