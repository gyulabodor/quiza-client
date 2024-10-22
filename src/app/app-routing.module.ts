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
    path:'lobby',
    loadChildren: () =>
      import('./lobby/lobby.module').then((m) => m.LobbyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
