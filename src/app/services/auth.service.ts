import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService, private router: Router) {}
  isValidUser(user: User): boolean {
    let users: User[] = this.storageService.getAllUsers();
    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        this.storageService.setLoggedUser(u);
        isUser = true;
        break;
      }
    }
    return isUser;
  }

  register(registerForm: User) {
    let regUser = {
      id: this.storageService.users.length + 1,

      email: registerForm.email,

      password: registerForm.password,
    };

    this.storageService.users.push(regUser);

    let users: User[] = this.storageService.getAllUsers();

    users.push(regUser);

    localStorage.setItem('users', JSON.stringify(users));

    console.log(this.storageService.users);
  }

  log(): void {
    this.storageService.removeLoggedUser();
  }

  islogged(): boolean {
    return this.storageService.isUserLoggedIn();
  }

  getLoggedInUser(): User {
    return this.storageService.getloggedInUser();
  }
}
