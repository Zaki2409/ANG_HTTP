import { Component } from '@angular/core';
import  {UserService } from 'src/app/service/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANG_HTTP';
  about: any | undefined;

  constructor(private Userservice:UserService ){
    this.Userservice.getUsers().subscribe(data=>{
    this.about=data;
    console.log(data);
    });
}
}
