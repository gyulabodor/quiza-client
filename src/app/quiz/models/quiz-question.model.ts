import {QuizAnswer} from "./quiz-answer.model";
import {DifficultyEnum} from "../../../globals/enums/difficulty.enum";
import {QuizTopic} from "../../../globals/enums/quiz-topic.enum";

export interface QuizQuestion {
  id: number;
  text: string;
  pointsToEarn: boolean;
  difficulty: DifficultyEnum;
  topic: QuizTopic;
  alreadyPlayed: boolean;
  answers: QuizAnswer[];
}
