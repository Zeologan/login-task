import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.Form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.Form.valid) {
      const payload = {
        email: this.Form.value.username,
        phone: '',
        phoneCode: '965',
        password: this.Form.value.password,
        deviceToken: '',
        deviceType: '',
        deviceModel: '',
        appVersion: '',
        osVersion: ''
      };
      console.log('Form Submitted', this.Form.value);

      // Error Handling 
      this.auth.login(payload).subscribe({
        next: (res) => {
          console.log('Login success:', res);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Invalid credentials');
        }
      });
    }
  }
}
