import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], colorFilter: string): Color[] {
    return colorFilter?value.filter((c:Color)=>c.colorName.indexOf(colorFilter)!==-1):value
  }

}
