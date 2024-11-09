import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizRoutingModule} from "./quiz-routing.module";
import {DifficultySelectorComponent} from "./components/difficulty-selector/difficulty-selector.component";
import {SharedModule} from "../shared/shared.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";

import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DifficultySelectorComponent,

  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class QuizModule { }
