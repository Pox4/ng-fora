import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  user: User;
  copy:User;
  @Output() eventEmitter: EventEmitter<User> = new EventEmitter();

  constructor(public usersService: UsersService) {

  }

  ngOnInit() {

    this.user = {
      name: "Chouquette",
      id: 23,
      email: "toto@robusta.io",
      admin: false
    }

  }


  createUser() {
    this.copy = {...this.user}
    this.usersService.createUser(this.user).subscribe(response => this.eventEmitter.emit(this.copy));
  }

}
