import {Type} from "@angular/core";

export class ProcessStep<T> {
   public readonly queueId: number;
   private next?: number;
   private previous?: number;
   public content: Type<T>;
   private completed?: boolean;

  constructor(queueId: number, content: Type<T>) {
    this.queueId = queueId;
    this.content = content;
  }

  public setNext():void {
    this.next = this.queueId + 1;
  }
  public setPrevious():void {
    this.previous = this.queueId - 1;
  }
  public getNext() :number | null {
    return this.next === undefined ? null : this.next;
  }
  public getCompleted(): boolean | null{
    return this.completed === undefined ? null : this.completed;
  }
  public setCompleted(completed: boolean):void{
    this.completed=completed;
  }

}
