import {QuizTopic} from "./quiz-topic.model";
import {randomArrayIndexLength} from "../../shared/services/utility/utility.methods";
import {Topic} from "../../shared/globals/enums/topic.enum";
import {OperationState} from "../../shared/globals/enums/operation-state.enum";


export class QuizTopicList {
  items: QuizTopic[];
  operationState: OperationState;

  public constructor(items: QuizTopic[]) {
    this.items = items;
    this.operationState = OperationState.INIT;
}
  getItems(): QuizTopic[] {
    return this.items;
  }
  getItemByTopic(item: QuizTopic): QuizTopic {
    return <QuizTopic>this.items.find(item => item.id === item.id);
  }
  getItem(index:number): QuizTopic {
    return this.items[index];
  }
  addItem(item: QuizTopic) {
    this.items.push(item);
  }
  removeItem(topic: QuizTopic) {
     this.items.splice(this.items.indexOf(topic), 1);
  }
  getLength(): number {
    return this.items.length;
  }
  randomize() :QuizTopic{
    let randomTopic = this.getItem(randomArrayIndexLength(this.getLength()));

    while (randomTopic && (randomTopic.name === Topic.RANDOM || randomTopic.played)) {
      randomTopic = this.getItem(randomArrayIndexLength(this.getLength()))
    }
    randomTopic.setPlayed(true);
    return randomTopic;
  }


}
