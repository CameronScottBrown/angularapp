import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

//decorator
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit { //export makes it available outside of file
  //properties
  user: User;

  //methods
  constructor() {

  }

  ngOnInit(){
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe@gmail.com'
    }
  }

}
