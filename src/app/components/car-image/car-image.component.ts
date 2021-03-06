import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  car:Car
  carImages:CarImage[]

  constructor(private carImageService:CarImageService, private activatedRoute:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getImageByCarId(params["carId"])
        this.getCarDetailById(params["carId"])
      }
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getImageByCarId(carId).subscribe((response)=>{
      this.carImages = response.data
    })
  }

  getCarDetailById(carId:number){
    this.carService.getCarDetailById(carId).subscribe((response)=>{
      this.car = response.data
    })
  }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
