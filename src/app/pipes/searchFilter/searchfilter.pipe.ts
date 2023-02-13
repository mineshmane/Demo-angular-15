import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value:any,args?: any): any {
    console.log(args);

    if(!value || !args){
      return value
    }
   

   return value.filter((item: any) => {
      return item.title.includes(args) || item.description.includes(args);
    })


  }

}
