import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserSettingsPageComponent} from "./globals/pages/user-settings-page/user-settings-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserSettingsPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserSettingsPageComponent,
  ]
})
export class SharedModule { }
