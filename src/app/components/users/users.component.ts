import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../services/user.service';

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

  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
      
      // this.userService.getData().subscribe(data=>{
      //   console.log(data);
      // });

      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
    
      this.loaded = true;
  }


  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('form is not valid'); //form will always be valid thanks to our frontend logic
    } else {
      //add other properties
      value.isActive = true; //default
      value.registered = new Date(); //current date/time
      value.hide = true; //hide extended info at first

      this.userService.addUser(value); //send to service

      this.form.reset(); //reset form. simple
    }
  }

}
