import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "../authenticate.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  /*registerForm = new FormGroup({
    name: new FormControl(''),
    nic: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });*/

  /*private authService:AuthenticateService*/
  constructor() {
  }

  ngOnInit(): void {

  }

  /*registerUser() {
    this.authService.registerUser(this.registerForm.value).subscribe({
      next: data => {

      },
      error: err => {
        console.log(err);
      }
    })
  }*/

}
