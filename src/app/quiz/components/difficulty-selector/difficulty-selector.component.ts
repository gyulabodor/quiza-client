import {Component, OnInit} from '@angular/core';
import {DifficultyEnum} from "../../../shared/enums/difficulty.enum";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss']
})
export class DifficultySelectorComponent implements OnInit {

  public selectedDifficulty$?: BehaviorSubject<DifficultyEnum>;

  ngOnInit(): void {
    this.selectedDifficulty$ = new BehaviorSubject<DifficultyEnum>(DifficultyEnum.EASY);
  }

  public registerOnChanges(): void {

  }
}
