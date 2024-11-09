import {Component, OnInit} from '@angular/core';
import {DIFFICULTY_LEVELS} from "../../constants/difficulty-levels";
import {DifficultyLevel} from "../../models/difficulty-level.model";
import {QuizService} from "../../services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss']
})
export class DifficultySelectorComponent implements OnInit {

  constructor(private quizService: QuizService,
              private router: Router) {}
  ngOnInit(): void {

  }

  public submitDifficultyAndNavigate(chosenDifficulty: DifficultyLevel): void {
    this.quizService.registerDifficultyLevel(chosenDifficulty)
    this.router.navigateByUrl('/quiz/topic');
  }
  protected readonly DIFFICULTY_LEVELS = DIFFICULTY_LEVELS;
}
