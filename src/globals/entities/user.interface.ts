import {RegistrationState} from "./registration-state.enum";

export interface IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  regState: RegistrationState;
}

export interface FlowStep<T>{
  id?: string;
  queueOrder: number;
  title: string;
  url?: string;

}

export interface FlowProgress<T>{
  flowId?: string;
  flowSteps: FlowStep<T>[];
}
