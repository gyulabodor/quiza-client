import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {QuestionRequest} from "../models/dtos/question-request.interface";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public questionRequest$ = new BehaviorSubject<QuestionRequest>({} as QuestionRequest);
  constructor() {}
}
