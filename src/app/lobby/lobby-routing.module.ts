import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LobbyPageComponent} from "./lobby-page/lobby-page.component";

const routes: Routes = [
  {path: 'lobby', component:LobbyPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
