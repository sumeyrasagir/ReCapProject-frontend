import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], brandFilter: string): Brand[] {
    return brandFilter?value.filter((b:Brand)=>b.brandName.indexOf(brandFilter)!==-1):value
  }

}
