import {Component, Input, OnInit} from '@angular/core';
import {QuizTopic} from "../../models/quiz-topic.model";
import {BehaviorSubject} from "rxjs";
import {ProgressCardState} from 'src/app/shared/globals/enums/view-control-state.enum';

@Component({
  selector: 'quiz-topic-card',
  templateUrl: './quiz-topic-card.component.html',
  styleUrls: ['./quiz-topic-card.component.scss']
})
export class QuizTopicCardComponent implements OnInit {
    @Input() public state?: ProgressCardState;
    @Input() quizTopic?: QuizTopic = {} as QuizTopic;

    public topicName$ = new BehaviorSubject<string | undefined>(undefined);

    ngOnInit(): void {
        if (this.quizTopic !== undefined && this.quizTopic !== null) {
          this.topicName$.next(this.quizTopic.name)
        }
        console.log(this.state)
    }
    public startTopicRandomization() :void {
      this.state = ProgressCardState.GENERATE;

    }
  protected readonly ProgressCardState = ProgressCardState;
}
