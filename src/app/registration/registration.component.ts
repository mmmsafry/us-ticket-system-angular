import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {I_Registration} from "../models/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  baseUrl = environment.baseApiUrl;
  error = null;
  success: string|null = null;
  constructor(private fb: FormBuilder, private http: HttpClient) {
  }


  registerForm = this.fb.group({
    name: [''],
    nic: [''],
    password: [''],
    password_confirmation: ['']
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.http.post<I_Registration>(`${this.baseUrl}/auth/register`, this.registerForm.value).subscribe(response => {
      console.log(response);
      response.access_token;
      this.success = `${response.user.name} has successfully registered`;
      setTimeout(()=>{                           // <<<---using ()=> syntax
        this.success = null;
      }, 3000);
    })
  }
}
