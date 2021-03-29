import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44374/api/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailById(carId:number):Observable<ObjectResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbyid?carId="+carId
    return this.httpClient.get<ObjectResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
}

}
