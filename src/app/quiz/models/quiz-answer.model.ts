import {PlayerVote} from "./player-vote.model";

export interface QuizAnswer {
  id:number;
  question_id:number;
  text: string;
  playerVotes: PlayerVote[];
}
