import {QuizAnswer} from "./quiz-answer.model";
import {DifficultyEnum} from "../../shared/enums/difficulty.enum";
import {QuizTopic} from "../../shared/enums/quiz-topic.enum";

export interface QuizQuestion {
  id: number;
  text: string;
  pointsToEarn: boolean;
  difficulty: DifficultyEnum;
  topic: QuizTopic;
  alreadyPlayed: boolean;
  answers: QuizAnswer[];
}
