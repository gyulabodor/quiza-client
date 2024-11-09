import {Component, Input, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {DifficultyLevel} from "../../models/difficulty-level.model";
import {QuizTopic} from "../../models/quiz-topic.model";
import {QUIZ_TOPIC_LIST} from "../../constants/quiz-topics";
import {Topic} from "../../../shared/globals/enums/topic.enum";
import {ProgressCardState} from "../../../shared/globals/enums/view-control-state.enum";

@Component({
  selector: 'app-quiz-topic',
  templateUrl: './quiz-topic.component.html',
  styleUrls: ['./quiz-topic.component.scss']
})
export class QuizTopicComponent implements OnInit {

  public difficultyLevel$= new BehaviorSubject<DifficultyLevel>({} as DifficultyLevel);
  public randomizedTopic$?: QuizTopic;
  public testTopic = new QuizTopic(1,Topic.CHEMISTRY)

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.difficultyLevel$ = this.quizService.actualDifficulty$


  }

  public randomizeTopic():Observable<QuizTopic[]> {
    return of(QUIZ_TOPIC_LIST).pipe(

    );
  }

  protected readonly ProgressCardState = ProgressCardState;
}
