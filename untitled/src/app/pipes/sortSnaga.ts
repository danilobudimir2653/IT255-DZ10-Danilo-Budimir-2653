import {Pipe} from  '@angular/core';


@Pipe(
  {
    name : 'SortSnaga'
  }
)
export class SortSnaga{
  transform(array: Array<any>): Array<number> {
    array.sort((a: any, b: any) => {
      if (a['snagaMotora'] < b['snagaMotora']) {
        return -1;
      } else if (a['snagaMotora'] > b['snagaMotora']) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }


}
