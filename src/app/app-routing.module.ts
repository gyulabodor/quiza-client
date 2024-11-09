import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotExistingPageComponent} from "./shared/globals/pages/not-existing-page/not-existing-page.component";
import {WelcomePageComponent} from "./shared/globals/pages/welcome-page/welcome-page.component";

const routes: Routes = [
  { path:'', component: WelcomePageComponent },

  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./quiz/quiz.module').then((m) => m.QuizModule)
  },
  { path:'**', component: NotExistingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
