import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
 //transform method comes from PipeTransform interface

  transform(value: unknown, ...args: unknown[]): unknown {
    /*value is the input parameters..we crossed check in the 
     in the output it is showing Intellipaat,but the
     value are */
    
    return "Your salary is" + " " +value;
  }

}
