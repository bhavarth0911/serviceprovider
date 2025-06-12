import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ServiceCategory {
  serviceDetailId:number;
  title: string;
  description: string;
  rating: number;
  providers: number; // This is not available from backend; you can hardcode it for now
}

export interface ServiceProvider {
  serviceProviderId: number;
  serviceProviderName: string;
  address: string;
  phoneNumber: string;
  email: string;
  cost: number;
  serviceDetailsId: number;
}
export interface ServiceProvidersList extends ServiceProvider {
   "serviceName": string,
   "serviceDescription": string,
   "serviceRating":number
}

interface ProvidersResponse {
  attributes: {
    serviceproviders: ServiceProvider[];
  };
  errors: any;
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
          serviceDetailId:item.serviceDetailid,
          title: item.serviceName,
          description: item.serviceDescription,
          rating: item.serviceRating,
          providers: Math.floor(Math.random() * 50 + 10) // Random for now
        }));
      })
    );
  }
    // New method to get providers by service detail ID
  getProvidersByServiceDetailId(serviceDetailsId: string): Observable<ProvidersResponse> {
    const body = {
      serviceDetailsId: serviceDetailsId
    };

    return this.http.post<ProvidersResponse>(
      `${this.baseUrl}/serviceprovider/getProviderByServiceDetailId`,
      body
    );
  }

  addServiceProvider(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/serviceprovider/addServiceProvider`, data);
  }

  sendEmail(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/user/sendEmail`, data);
  }

  getProviders():Observable<ServiceProvidersList[]>{
    return this.http.get<any>(`${this.baseUrl}/ADD-YOUR-ENDPOINT-HERE-PLZ`).pipe(map(response=>{
      return response.attribute as ServiceProvidersList[];
    }));
  }

}
