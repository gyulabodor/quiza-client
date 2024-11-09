import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserSettingsPageComponent} from "./globals/pages/user-settings-page/user-settings-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./template/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    UserSettingsPageComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        RouterLink,
    ],
  exports: [
    UserSettingsPageComponent,
    HeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
