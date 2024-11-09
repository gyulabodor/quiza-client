import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable, of} from "rxjs";
import {QuestionRequest} from "../models/dtos/question-request.interface";
import {DifficultyLevel} from "../models/difficulty-level.model";
import {QuizTopic} from "../models/quiz-topic.model";
import {Topic} from "../../shared/globals/enums/topic.enum";

import {DIFFICULTY_LEVELS} from "../constants/difficulty-levels";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public requestQuestions$ = new BehaviorSubject<QuestionRequest>({} as QuestionRequest);
  public actualDifficulty$= new BehaviorSubject<DifficultyLevel>({} as DifficultyLevel);

  constructor() {}

  public registerDifficultyLevel(chosenDifficulty: DifficultyLevel):void {
    const game = DIFFICULTY_LEVELS;
    this.actualDifficulty$.next(chosenDifficulty);
  }
}
