import {RegistrationState} from "../enums/registration-state.enum";

export interface User {
  id?: string;
  email: string;
  password: string;
  regState: RegistrationState;
}
