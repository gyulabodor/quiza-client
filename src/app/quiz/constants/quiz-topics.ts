import {QuizTopic} from "../models/quiz-topic.model";
import {Topic} from "../../shared/globals/enums/topic.enum";

export const QUIZ_TOPIC_LIST: QuizTopic[] = [

{id:1,name: Topic.CHEMISTRY, played: false} as QuizTopic,
{id:2,name: Topic.HISTORY, played: false} as QuizTopic,
{id:3,name: Topic.ANIMALS, played: false} as QuizTopic,
{id:4,name: Topic.BIOLOGY, played: false} as QuizTopic,
{id:5,name: Topic.INFORMATION_TECHNOLOGY, played: false} as QuizTopic,
{id:6,name: Topic.LITERATURE, played: false} as QuizTopic,
{id:7,name: Topic.PHYSICS, played: false} as QuizTopic,
{id:8,name: Topic.PLANTS, played: false} as QuizTopic,
{id:9,name: Topic.GEOGRAPHY, played: false} as QuizTopic,
{id:10,name: Topic.RANDOM, played: false} as QuizTopic,
];
