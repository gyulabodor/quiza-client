import {NgModule} from "@angular/core";

import {RouterModule, Routes} from "@angular/router";
import {DifficultySelectorComponent} from "./components/difficulty-selector/difficulty-selector.component";
import {QuizBoardComponent} from "./components/quiz-board/quiz-board.component";
import {QuizTopicComponent} from "./components/quiz-topic/quiz-topic.component";

export const routes: Routes = [
  {path: 'select-difficulty', component:DifficultySelectorComponent},
  {path: 'game', component:QuizBoardComponent},
  {path: 'topic', component:QuizTopicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
