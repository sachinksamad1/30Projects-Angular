import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userform',
  imports: [CommonModule, FormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss',
})
export class UserformComponent {
  newUser: Partial<User> = {};

  constructor(private userService: UserService) {}

  onSubmit(userForm: NgForm) {
    this.userService.addUser(this.newUser);
    this.newUser = {};
    userForm.resetForm();
  }
}
