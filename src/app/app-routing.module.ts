import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/car-image/:carId', component: CarImageComponent },
  { path: 'cars/getCarDetails/:carId', component: CarComponent },
  { path: 'cars/listbycolor/:colorId', component: CarComponent },
  { path: 'cars/listbybrand/:brandId', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
