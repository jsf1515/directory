import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'searchPeople'
})
export class SearchPeoplePipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {

    return pipeData.filter(eachItem => {
      return (
        eachItem['sortName'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });

  }

}
