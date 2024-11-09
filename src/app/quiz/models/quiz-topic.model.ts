import {Topic} from "../../shared/globals/enums/topic.enum";

export class QuizTopic{
  id?:number;
  name?: Topic;
  alreadyPlayed?: boolean;


  constructor(id: number, name: Topic) {
    this.id = id;
    this.name = name;
    this.alreadyPlayed = false;
  }

  public hasAlreadyPlayed() :boolean {
    return this.alreadyPlayed ?? false;
  }
}
