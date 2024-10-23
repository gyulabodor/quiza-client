import {QuizAnswer} from "./quiz-answer.model";
import {DifficultyEnum} from "../../../globals/enums/difficulty.enum";

export interface QuizQuestion {
  id: number;
  text: string;
  pointsToEarn: boolean;
  difficulty: DifficultyEnum;
  topic_id: number;
  alreadyPlayed: boolean;
  answers: QuizAnswer[];
}
