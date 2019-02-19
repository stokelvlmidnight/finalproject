import { Component } from '@angular/core';
import { ApiService } from './api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  user = {
  firstName: "",
  lastName: "",
  email: '',
  password: ''
  
}

  
  constructor(private _api: ApiService){}
  
  onClick()  {
    this._api.request(this.user)
    .subscribe((response:any) => {
      console.log("test", this._api.user)
      this.data = response;
      console.log("first", this.data);
    })
  }
  
  
  title = 'frontend-project';
}
