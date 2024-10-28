import {QuizTopic} from "../../../../globals/enums/quiz-topic.enum";
import {DifficultyEnum} from "../../../../globals/enums/difficulty.enum";

export interface QuestionRequest {
  topic: QuizTopic,
  difficulty: DifficultyEnum
}
