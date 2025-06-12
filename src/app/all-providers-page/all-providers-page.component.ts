import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { ServiceDetailService, ServiceProvidersList } from '../services/service-detail.service';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-all-providers-page',
  standalone: true,
  imports: [NgIf,NgForOf,CurrencyPipe],
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
                serviceProviderName: "Johny Sins",
                address: "someday My Home, Someday Others",
                phoneNumber: "9980986969",
                email: "johnysins2121@gmail.com",
                cost: 0,
                serviceDetailsId: 1,
                serviceName: "All Service",
                serviceDescription: "Just demand i am ready to do anything, from astronaut,plumber to teacher ",
                serviceRating: 5
    },
    {
    serviceProviderId: 2,
    serviceProviderName: "Sneha Patil",
    address: "Mumbai",
    phoneNumber: "9821345678",
    email: "sneha.patil@example.com",
    cost: 250,
    serviceDetailsId: 2,
    serviceName: "Pet Grooming",
    serviceDescription: "Professional grooming and hygiene services for your pets at home.",
    serviceRating: 4.7
  },
  {
    serviceProviderId: 3,
    serviceProviderName: "Rohan Mehta",
    address: "Nagpur",
    phoneNumber: "9012345678",
    email: "rohan.mehta@example.com",
    cost: 300,
    serviceDetailsId: 3,
    serviceName: "Car Wash",
    serviceDescription: "Eco-friendly mobile car washing and detailing services.",
    serviceRating: 4.2
  },
  {
    serviceProviderId: 4,
    serviceProviderName: "Aarti Kulkarni",
    address: "Pune",
    phoneNumber: "9123456780",
    email: "aarti.kulkarni@example.com",
    cost: 180,
    serviceDetailsId: 4,
    serviceName: "House Cleaning",
    serviceDescription: "Deep cleaning, kitchen/bathroom sanitation, and floor polishing.",
    serviceRating: 4.8
  },
  {
    serviceProviderId: 5,
    serviceProviderName: "Vikas Deshmukh",
    address: "Nashik",
    phoneNumber: "7890123456",
    email: "vikas.deshmukh@example.com",
    cost: 220,
    serviceDetailsId: 5,
    serviceName: "AC Repair",
    serviceDescription: "Installation, servicing, and repair of air conditioners.",
    serviceRating: 4.3
  },
  {
    serviceProviderId: 6,
    serviceProviderName: "Neha Sharma",
    address: "Thane",
    phoneNumber: "8765432109",
    email: "neha.sharma@example.com",
    cost: 270,
    serviceDetailsId: 6,
    serviceName: "Babysitting",
    serviceDescription: "Certified and experienced babysitting services at your convenience.",
    serviceRating: 4.9
  },
  {
    serviceProviderId: 7,
    serviceProviderName: "Amit Jain",
    address: "Aurangabad",
    phoneNumber: "9988776655",
    email: "amit.jain@example.com",
    cost: 150,
    serviceDetailsId: 7,
    serviceName: "Electrician",
    serviceDescription: "Fixing wiring issues, installing fans, switches, and other electrical work.",
    serviceRating: 4.1
  },
  {
    serviceProviderId: 8,
    serviceProviderName: "Pooja Khedekar",
    address: "Kolhapur",
    phoneNumber: "9112233445",
    email: "pooja.khedekar@example.com",
    cost: 320,
    serviceDetailsId: 8,
    serviceName: "Plumber",
    serviceDescription: "Leak fixing, pipe installations, water heater setup and more.",
    serviceRating: 4.6
  },
  {
    serviceProviderId: 9,
    serviceProviderName: "Sahil Bhosale",
    address: "Satara",
    phoneNumber: "7345678901",
    email: "sahil.bhosale@example.com",
    cost: 260,
    serviceDetailsId: 9,
    serviceName: "Gardening",
    serviceDescription: "Lawn care, plant trimming, and garden design services.",
    serviceRating: 4.4
  },
  {
    serviceProviderId: 10,
    serviceProviderName: "Ritika More",
    address: "Solapur",
    phoneNumber: "9988123456",
    email: "ritika.more@example.com",
    cost: 240,
    serviceDetailsId: 10,
    serviceName: "Cook Service",
    serviceDescription: "Daily meal preparation, dietary cooking, and party catering.",
    serviceRating: 4.7
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