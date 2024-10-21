import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../globals/entities/user.model";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Input() title?: string;
  @Input() content?: string;
  @Output() login: EventEmitter<User> = new EventEmitter();



}
