import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ServiceCategory {
  serviceId:number;
  title: string;
  description: string;
  rating: number;
  providers: number; // This is not available from backend; you can hardcode it for now
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getServiceCategories(): Observable<ServiceCategory[]> {
    return this.http.get<any>(`${this.baseUrl}/serviceDetail/getAllServices`).pipe(
      map(response => {
        return response.attributes.message.map((item: any) => ({
          serviceID:item.serviceDetailid,
          title: item.serviceName,
          description: item.serviceDescription,
          rating: item.serviceRating,
          providers: Math.floor(Math.random() * 50 + 10) // Random for now
        }));
      })
    );
  }

//   getProvidersByServiceDetailId(serviceDetailsId: string) {
//   return this.http.post<any>(
//     `${this.baseUrl}/serviceprovider/getProviderByServiceDetailId`,
//     { serviceDetailsId }
//   );
// }


}
