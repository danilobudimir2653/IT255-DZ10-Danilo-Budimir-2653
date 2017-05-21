import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/rx';

@Component({
  selector: 'app-root',
  templateUrl: './templejt.html',

})
export class AppComponent {
  private auta = 'http://localhost/b/kola.php';
  data: Object[];
  name: String = "";
  constructor (private http: Http){
    this.http.get(this.auta).subscribe(
      data => {
        this.data = JSON.parse(data["_body"]);
      },
      err => console.log(err.text()),
      () => {
      }
    );
  }

}
