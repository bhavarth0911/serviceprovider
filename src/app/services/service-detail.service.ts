import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface ServiceDetail {
  serviceDetailid: number;
  serviceName: string;
  serviceDescription: string;
  serviceRating: number;
}
@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {
  private baseUrl = 'http://localhost:8080/serviceDetail';

  constructor(private http: HttpClient) {}

getAllServices(): Observable<{ attributes: { message: ServiceDetail[] } }> {
  return this.http.get<{ attributes: { message: ServiceDetail[] } }>(
    `${this.baseUrl}/getAllServices`
  );
}

}