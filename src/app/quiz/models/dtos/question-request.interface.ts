import {QuizTopic} from "../../../shared/enums/quiz-topic.enum";
import {DifficultyEnum} from "../../../shared/enums/difficulty.enum";

export interface QuestionRequest {
  topic: QuizTopic,
  difficulty: DifficultyEnum
}
