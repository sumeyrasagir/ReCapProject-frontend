import { Injectable } from '@angular/core';
import { CarResponeModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44374/api/cars/getcardetail';
 
  constructor(private httpClient: HttpClient) {}
  
  getCars(): Observable<CarResponeModel> {
    return this.httpClient.get<CarResponeModel>(this.apiUrl);
  }
}
