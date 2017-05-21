import {Pipe} from  '@angular/core';


@Pipe(
  {
    name : 'KubikazaMotora'
  }
)

export class KubikazaMotora{

  transform(array: Array<any>): Array<number> {
    array.sort((a: any, b: any) => {
      if (a['kubikazaMotora'] < b['kubikazaMotora']) {
        return -1;
      } else if (a['kubikazaMotora'] > b['kubikazaMotora']) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;


  }
}
