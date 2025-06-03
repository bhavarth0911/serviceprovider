import { Component, OnInit } from '@angular/core';
import { ServiceDetailService } from '../services/service-detail.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-providers-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './providers-page.component.html',
  styleUrl: './providers-page.component.css'
})
export class ProviderListComponent  {
  
  serviceProviders =[
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
     {
      serviceProviderName:"bhavarth",
      email: 'bhavarthnagavkar@gmail.com',
      phoneNumber: 7391838372,
      address: 'pune',
      cost: 45
    },
  ]
}