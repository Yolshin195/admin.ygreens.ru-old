import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.createForm();

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      isSave: [false]
    });
  }

  onSubmit() {
    this.userService.authenticate({username: this.form.value.phone, password: this.form.value.password, isSave: this.form.value.isSave}, (error:boolean, user: User) => {
      if (error) {
        console.log("Error!");
      } else {
        console.log('Login.components submit: ', user);
        this.router.navigateByUrl("/");
      }
    });
  }

}
