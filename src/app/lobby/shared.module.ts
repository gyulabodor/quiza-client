import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserSettingsPageComponent} from "./user-settings-page/user-settings-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserSettingsPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
