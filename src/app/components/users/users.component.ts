import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }; //single user model
  users: User[]; //array
  showExtended: boolean = false;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'jdoe@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Cameron',
          lastName: 'Smith',
          email: 'csmith@gmail.com',
          isActive: false,
          registered: new Date('03/07/2018 02:30:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Ruthers',
          email: 'kruthers@gmail.com',
          isActive: true,
          registered: new Date('06/06/2017 04:30:00'),
          hide:true
        }
      ];

  }


  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('form is not valid'); //form will always be valid thanks to our frontend logic
    } else {

      //add other properties
      value.isActive = true; //default
      value.registered = new Date(); //current date/time
      value.hide = true; //hide extended info at first
      this.users.unshift(value); //User object contains first,last,email

      this.form.reset(); //reset form. simple
    }
  }

}
