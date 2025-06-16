import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor() { }

   private bookingData: any = null;

  setBookingData(data: any): void {
    this.bookingData = data;
  }

  getBookingData(): any {
    return this.bookingData;
  }

  clearBookingData(): void {
    this.bookingData = null;
  }
}
