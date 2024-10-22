import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { UserSettingsPageComponent } from './user-settings-page/user-settings-page.component';



@NgModule({
  declarations: [
    LobbyPageComponent,
    UserSettingsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LobbyModule { }
