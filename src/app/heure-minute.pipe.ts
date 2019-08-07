import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HeureMinute'
})
export class HeureMinutePipe implements PipeTransform {

  transform(value: number): string {
    // 2h05
    let hour = Math.floor(value/60);
    let minutes:any = value%60; 
    if(minutes <10){
      minutes = "0"+minutes;
    }
    return `${hour}h${minutes}min`;
  }

}
