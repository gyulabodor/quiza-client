import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { NotExistingPageComponent } from './pages/not-existing-page/not-existing-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { QuizBoardComponent } from './quiz/components/quiz-board/quiz-board.component';
import { DifficultySelectorComponent } from './quiz/components/difficulty-selector/difficulty-selector.component';
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotExistingPageComponent,
    WelcomePageComponent,
    QuizBoardComponent,
    DifficultySelectorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
