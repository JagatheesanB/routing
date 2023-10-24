import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private authService:AuthService, private router: Router) {}

  onSubmit(registerForm: NgForm) {
    this.authService.register(registerForm.value);

    this.router.navigate(['/login']);
  }
}
