import {DifficultyLevel} from "../difficulty-level.model";
import {QuizTopic} from "../quiz-topic.model";

export interface QuestionRequest {
  topic: QuizTopic,
  difficulty: DifficultyLevel
}
