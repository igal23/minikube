import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa-demo';

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    this.http.get('http://localhost:32767/api/test').subscribe(x=> {
      console.log('UN ÉXITO');
      console.log(x);
    }, err => {
      console.log('UN ERROR');
      console.log(err);
  });
  }
}
