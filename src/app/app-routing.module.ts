import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotExistingPageComponent} from "./pages/not-existing-page/not-existing-page.component";
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";

const routes: Routes = [
  { path:'', component: WelcomePageComponent },
  { path:'**', component: NotExistingPageComponent },
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
    path: 'select-difficult',
    loadChildren: () =>
      import(('./quiz/models/quiz.module')).then((m) => m.QuizModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
