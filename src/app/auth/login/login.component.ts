import {Component, OnInit} from '@angular/core';
import {AuthFormComponent} from "../auth-form/auth-form.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthFormComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
