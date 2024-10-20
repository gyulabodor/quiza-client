import {Type} from "@angular/core";

export class StepModel<T> {
   public queueId: number;
   private next?: number;
   private previous?: number;
   public content: Type<T>;
   private completed?: boolean;

  constructor(queueId: number, content: Type<T>) {
    this.queueId = queueId;
    this.content = content;
  }

  public goToNext():void {
    this.next = this.queueId + 1;
  }
  public goToPrevious():void {
    this.previous = this.queueId - 1;
  }
  public getNext() :number | null {
    if (this.next === undefined) { return null;}
    return this.next;
  }

}
